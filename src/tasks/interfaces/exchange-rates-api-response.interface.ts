// src/tasks/interfaces/exchange-rates-api-response.interface.ts

import { SupportedSymbolsType } from '../constants/supported-symbols-rates.const';

/**
 * Respuesta JSON de https://api.exchangeratesapi.io/v1/latest?access_key=…&symbols=USD,COP,EUR,...
 */
export interface ExchangeRatesApiResponse {
  success: boolean;
  timestamp: number;
  base: SupportedSymbolsType;
  date: string;
  rates: Record<SupportedSymbolsType, number>;
}
