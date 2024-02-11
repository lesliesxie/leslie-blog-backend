/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-02-11 18:48:20
 * @LastEditors: leslie
 * @LastEditTime: 2024-02-11 19:04:26
 * 佛祖保佑没bug
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Classification } from './classification.entity';
import { ClassificationController } from './classification.controller';
import { ClassificationService } from './classification.service';

@Module({
  imports: [TypeOrmModule.forFeature([Classification])],
  controllers: [ClassificationController],
  providers: [ClassificationService],
})
export class ClassificationModule {}
