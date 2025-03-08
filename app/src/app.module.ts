import { Module } from '@nestjs/common';
import { Challenge1Module } from './challenge1/challenge1.module';
import { Challenge2Module } from './challenge2/challenge2.module';
import { Challenge3Module } from './challenge3/challenge3.module';
import { PingModule } from './ping/ping.module';

@Module({
  imports: [
    Challenge1Module,
    Challenge2Module,
    Challenge3Module,
    PingModule,
  ],
})
export class AppModule {}
