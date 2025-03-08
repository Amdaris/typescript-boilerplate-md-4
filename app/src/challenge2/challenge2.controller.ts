import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { Challenge2Service } from './challenge2.service';
import { ApiBody, ApiResponse } from '@nestjs/swagger';


@Controller()
export class Challenge2Controller {
  constructor(private readonly challenge2Service: Challenge2Service) { }

  @Post('/challenge-2')
  @HttpCode(200)
  @ApiBody({ isArray: true, schema: { items: { type: "number" } } })
  @ApiResponse({ isArray: true, schema: { items: { type: "number" } } })
  getResult(@Body() body: number[]): number[] {
    return this.challenge2Service.getResult(body);
  }
}
