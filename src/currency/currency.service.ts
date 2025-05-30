import { Injectable, NotFoundException } from '@nestjs/common';
import { Decimal } from '../../generated/prisma/runtime/library';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { CreateExchangeRateDto } from './dto/exchange-rate.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { CurrencyEntity } from './entities/currency.entity';
import { ExchangeRateEntity } from './entities/exchange-rate.entity';

@Injectable()
export class CurrencyService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCurrencyDto: CreateCurrencyDto) {
    const currency = await this.prisma.currency.create({
      data: {
        ...createCurrencyDto,
      },
    });

    return new CurrencyEntity({ ...currency });
  }

  async findAll() {
    const currencies = await this.prisma.currency.findMany();

    return currencies.map((currency) => new CurrencyEntity({ ...currency }));
  }

  async findOne(code: string) {
    const currency = await this.prisma.currency.findUnique({
      where: { code },
    });

    if (!currency) {
      throw new NotFoundException(`Currency with code ${code} not found`);
    }

    return new CurrencyEntity({ ...currency });
  }

  async update(code: string, dto: UpdateCurrencyDto) {
    const currency = await this.prisma.currency.update({
      where: { code },
      data: { ...dto },
    });
    return new CurrencyEntity({ ...currency });
  }

  async remove(code: string) {
    await this.prisma.currency.delete({ where: { code } });
  }

  async addExchangeRate(dto: CreateExchangeRateDto) {
    const ex = await this.prisma.exchangeRate.create({
      data: {
        currencyCode: dto.currencyCode,
        rateToBase: dto.rateToBase,
        validFrom: new Date(dto.validFrom),
        validTo: dto.validTo ? new Date(dto.validTo) : null,
        source: dto.source,
      },
    });

    return new ExchangeRateEntity({ ...ex });
  }

  async getExchangeRates(currencyCode: string): Promise<ExchangeRateEntity[]> {
    const rates = await this.prisma.exchangeRate.findMany({
      where: { currencyCode },
      orderBy: { validFrom: 'desc' },
    });
    return rates.map(
      (r) =>
        new ExchangeRateEntity({
          ...r,
        }),
    );
  }

  async upsertCurrency(props: {
    code: string;
    name: string;
    symbol: string;
    exchangeRate: number;
  }): Promise<CurrencyEntity> {
    const { code, name, symbol, exchangeRate } = props;
    const currencyRecord = await this.prisma.currency.upsert({
      where: { code },
      create: {
        code,
        name,
        symbol,
        exchangeRate: new Decimal(exchangeRate),
      },
      update: {
        exchangeRate: new Decimal(exchangeRate),
      },
    });
    return new CurrencyEntity({ ...currencyRecord });
  }

  async removeOldExchangeRates(olderThan: Date): Promise<number> {
    const result = await this.prisma.exchangeRate.deleteMany({
      where: {
        validFrom: {
          lt: olderThan,
        },
      },
    });

    return result.count;
  }
}
