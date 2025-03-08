import { Module } from '@nestjs/common';
import { Challenge1Controller } from './challenge1.controller';
import { Challenge1Service } from './challenge1.service';

@Module({
  imports: [],
  controllers: [Challenge1Controller],
  providers: [Challenge1Service],
})
export class Challenge1Module { }
