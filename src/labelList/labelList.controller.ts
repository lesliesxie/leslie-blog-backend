/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-03-24 17:39:44
 * @LastEditors: leslie
 * @LastEditTime: 2024-03-24 17:49:28
 * 佛祖保佑没bug
 */

import { Body, Controller, Get, Post } from '@nestjs/common';
import { LabelListService } from './labelList.service';
import { LabelList } from './labelList.entity';

@Controller('labelList')
export class LabelListController {
  constructor(private readonly labelListService: LabelListService) {}

  @Get()
  async findAll(): Promise<LabelList[]> {
    return this.labelListService.findAll();
  }

  @Post()
  async create(@Body('name') name: string): Promise<LabelList> {
    return this.labelListService.create(name);
  }
}
