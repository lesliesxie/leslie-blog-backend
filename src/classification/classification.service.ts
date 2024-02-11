/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-02-11 18:47:25
 * @LastEditors: leslie
 * @LastEditTime: 2024-02-11 18:57:39
 * 佛祖保佑没bug
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Classification } from './classification.entity';

@Injectable()
export class ClassificationService {
  constructor(
    @InjectRepository(Classification)
    private classificationRepository: Repository<Classification>,
  ) {}
  async findAll(): Promise<Classification[]> {
    return await this.classificationRepository.find();
  }
  async create(name: string): Promise<Classification> {
    const item = new Classification();
    item.name = name;
    return await this.classificationRepository.save(item);
  }
}