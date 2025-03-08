import { Module } from '@nestjs/common';
import { Challenge2Controller } from './challenge2.controller';
import { Challenge2Service } from './challenge2.service';

@Module({
  imports: [],
  controllers: [Challenge2Controller],
  providers: [Challenge2Service],
})
export class Challenge2Module { }
