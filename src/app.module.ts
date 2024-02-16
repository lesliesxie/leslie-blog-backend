/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-01-26 19:08:40
 * @LastEditors: leslie
 * @LastEditTime: 2024-02-16 17:06:28
 * 佛祖保佑没bug
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ClassificationModule } from './classification/classification.module';
import { ContentListModule } from './contentList/contentList.module';

@Module({
  imports: [DatabaseModule, ClassificationModule, ContentListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
