/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-02-16 16:42:56
 * @LastEditors: leslie
 * @LastEditTime: 2024-02-16 20:35:11
 * 佛祖保佑没bug
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentList } from './contentList.entity';
import { ContentListService } from './contentList.service';
import { ContentListController } from './contentList.controller';
import { ClassificationService } from 'src/classification/classification.service';
import { Classification } from 'src/classification/classification.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContentList, Classification])],
  controllers: [ContentListController],
  providers: [ContentListService, ClassificationService],
})
export class ContentListModule {}
