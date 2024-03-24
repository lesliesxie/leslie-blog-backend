/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-02-16 16:42:56
 * @LastEditors: leslie
 * @LastEditTime: 2024-03-24 17:55:33
 * 佛祖保佑没bug
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentList } from './contentList.entity';
import { ContentListService } from './contentList.service';
import { ContentListController } from './contentList.controller';
import { ClassificationService } from 'src/classification/classification.service';
import { Classification } from 'src/classification/classification.entity';
import { LabelList } from 'src/labelList/labelList.entity';
import { LabelListService } from 'src/labelList/labelList.service';

@Module({
  imports: [TypeOrmModule.forFeature([ContentList, Classification, LabelList])],
  controllers: [ContentListController],
  providers: [ContentListService, ClassificationService, LabelListService],
})
export class ContentListModule {}
