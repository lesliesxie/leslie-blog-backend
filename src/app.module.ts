/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-01-26 19:08:40
 * @LastEditors: leslie
 * @LastEditTime: 2024-03-24 18:12:34
 * 佛祖保佑没bug
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ClassificationModule } from './classification/classification.module';
import { ContentListModule } from './contentList/contentList.module';
import { LabelListModule } from './labelList/labelList.module';

@Module({
  imports: [
    DatabaseModule,
    ClassificationModule,
    ContentListModule,
    LabelListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
