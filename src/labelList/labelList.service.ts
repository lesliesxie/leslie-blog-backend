/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-03-24 17:39:59
 * @LastEditors: leslie
 * @LastEditTime: 2024-03-24 20:56:53
 * 佛祖保佑没bug
 */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LabelList } from './labelList.entity';

@Injectable()
export class LabelListService {
  constructor(
    @InjectRepository(LabelList)
    private readonly labelListRepository: Repository<LabelList>,
  ) {}

  async findAll(): Promise<LabelList[]> {
    return await this.labelListRepository.find();
  }

  async getLabelListByContentListId(
    contentListId: number,
  ): Promise<LabelList[]> {
    return await this.labelListRepository.find({
      where: { contentList: { id: contentListId } },
    });
  }

  async getOrCreateLabelList(labelId: number): Promise<LabelList[]> {
    return await this.labelListRepository.find({
      where: { id: labelId },
    });
  }

  async create(name: string): Promise<LabelList> {
    const item = new LabelList();
    item.value = name;
    return await this.labelListRepository.save(item);
  }
}
