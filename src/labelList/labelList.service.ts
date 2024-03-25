/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-03-24 17:39:59
 * @LastEditors: leslie
 * @LastEditTime: 2024-03-25 23:02:31
 * 佛祖保佑没bug
 */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LabelList } from './labelList.entity';
import { ContentList } from 'src/contentList/contentList.entity';

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

  async updateLabelListContentList(
    content: ContentList,
    labelList: LabelList[],
  ): Promise<void> {
    const labelIds = labelList.map((label) => label[0].id);
    // 构建SQL语句来更新关联表
    const query = `
    DELETE FROM label_list_content_list_content_list
    WHERE contentListId = ${content.id};

    INSERT INTO label_list_content_list_content_list (labelListId, contentListId)
    VALUES ${labelIds.map((labelId) => `(${labelId}, ${content.id})`).join(', ')};
  `;

    // 执行SQL查询来更新关联表
    await this.labelListRepository.query(query);
  }
}
