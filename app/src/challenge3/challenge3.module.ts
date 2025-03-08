import { Module } from '@nestjs/common';
import { Challenge3Controller } from './challenge3.controller';
import { Challenge3Service } from './challenge3.service';

@Module({
  imports: [],
  controllers: [Challenge3Controller],
  providers: [Challenge3Service],
})
export class Challenge3Module { }
