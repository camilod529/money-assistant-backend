import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { firstValueFrom } from 'rxjs';
import { env } from '../config/env';
import { CurrencyService } from '../currency/currency.service';
import { supportedSymbols } from './constants/supported-symbols-rates.const';
import { ExchangeRatesApiResponse } from './interfaces/exchange-rates-api-response.interface';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);
  private readonly baseUrl = 'https://api.exchangeratesapi.io/v1';

  constructor(
    private readonly http: HttpService,
    private readonly currencyService: CurrencyService,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async handleDailyExchangeRateUpdate() {
    this.logger.log('Starting daily exchange rate update...');

    try {
      const symbolsParam = supportedSymbols.join(',');
      const apiKey = env.EXCHANGE_RATE_API_KEY;
      const url = `${this.baseUrl}/latest`;

      if (!apiKey) {
        this.logger.warn('Exchange rate API key is not set. Skipping update.');
        return;
      }

      const params = {
        access_key: apiKey,
        symbols: symbolsParam,
      };

      const response$ = this.http.get<ExchangeRatesApiResponse>(url, { params });

      const { data } = await firstValueFrom(response$);

      this.logger.log('Exchange rates fetched successfully', data);

      const today = new Date(data.date);

      const entries = Object.entries(data.rates);

      for (const [currencyCode, rateToBase] of entries) {
        await this.currencyService.upsertCurrency({
          code: currencyCode,
          name: currencyCode,
          symbol: currencyCode,
          exchangeRate: rateToBase,
        });
        await this.currencyService.addExchangeRate({
          currencyCode,
          rateToBase,
          validFrom: today.toISOString(),
          source: 'ExchangeRatesAPI.io',
        });
      }

      const cutoffDate = new Date();

      cutoffDate.setDate(today.getDate() - 14);

      const deletedCount = await this.currencyService.removeOldExchangeRates(cutoffDate);

      this.logger.log(`Deleted ${deletedCount} old exchange rates before ${cutoffDate.toISOString()}`);
      this.logger.log('Daily exchange rate update completed successfully.');
    } catch (error) {
      this.logger.error('Error during daily exchange rate update', error);
    }
  }
}
