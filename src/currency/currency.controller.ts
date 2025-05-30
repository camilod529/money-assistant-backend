import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { CreateExchangeRateDto } from './dto/exchange-rate.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Post()
  create(@Body() dto: CreateCurrencyDto) {
    return this.currencyService.create(dto);
  }

  @Get()
  findAll() {
    return this.currencyService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.currencyService.findOne(code);
  }

  @Patch(':code')
  update(@Param('code') code: string, @Body() dto: UpdateCurrencyDto) {
    return this.currencyService.update(code, dto);
  }

  @Delete(':code')
  remove(@Param('code') code: string) {
    return this.currencyService.remove(code);
  }
  @Post(':code/exchange-rate')
  addRate(@Param('code') code: string, @Body() dto: CreateExchangeRateDto) {
    dto.currencyCode = code;
    return this.currencyService.addExchangeRate(dto);
  }

  @Get(':code/exchange-rate')
  getRates(@Param('code') code: string) {
    return this.currencyService.getExchangeRates(code);
  }
}
