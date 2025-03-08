import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { Challenge1Service } from './challenge1.service';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller()
export class Challenge1Controller {
  constructor(private readonly challenge1Service: Challenge1Service) { }

  @Post('/challenge-1')
  @HttpCode(200)
  @ApiBody({ isArray: true, schema: { items: { type: "number" } } })
  @ApiResponse({ type: Number })
  getResult(@Body() body: number[]): number {
    return this.challenge1Service.getResult(body);
  }
}
