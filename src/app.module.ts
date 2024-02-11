/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-01-26 19:08:40
 * @LastEditors: leslie
 * @LastEditTime: 2024-02-11 19:21:00
 * 佛祖保佑没bug
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ClassificationModule } from './classification/classification.module';

@Module({
  imports: [DatabaseModule, ClassificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
