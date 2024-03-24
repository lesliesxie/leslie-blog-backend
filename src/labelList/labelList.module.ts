/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-03-24 17:39:32
 * @LastEditors: leslie
 * @LastEditTime: 2024-03-24 17:50:27
 * 佛祖保佑没bug
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LabelList } from './labelList.entity';
import { LabelListController } from './labelList.controller';
import { LabelListService } from './labelList.service';

@Module({
  imports: [TypeOrmModule.forFeature([LabelList])],
  controllers: [LabelListController],
  providers: [LabelListService],
})
export class LabelListModule {}
