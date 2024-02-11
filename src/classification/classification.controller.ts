/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-02-11 18:47:15
 * @LastEditors: leslie
 * @LastEditTime: 2024-02-11 19:02:47
 * 佛祖保佑没bug
 */

import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClassificationService } from './classification.service';
import { Classification } from './classification.entity';

@Controller('classification')
export class ClassificationController {
  constructor(private readonly classificationService: ClassificationService) {}
  @Get()
  async findAll(): Promise<Classification[]> {
    return this.classificationService.findAll();
  }
  @Post()
  async create(@Body('name') name: string) {
    return this.classificationService.create(name);
  }
}
