import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { start } from 'repl';
import { Challenge3Service } from './challenge3.service';

@Controller()
export class Challenge3Controller {
  constructor(
    private readonly challenge3Service: Challenge3Service,
  ) { }

  @Post('/challenge-3')
  @HttpCode(200)
  @ApiBody({ isArray: true, schema: { items: { type: "number" } } })
  @ApiResponse({ type: Number })
  getResult(@Body() body: number[]): number {
    return this.challenge3Service.getResult(body);
  }
}
