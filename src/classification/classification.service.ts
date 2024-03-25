/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-02-11 18:47:25
 * @LastEditors: leslie
 * @LastEditTime: 2024-03-25 23:04:58
 * 佛祖保佑没bug
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Classification } from './classification.entity';
import { ContentList } from 'src/contentList/contentList.entity';

@Injectable()
export class ClassificationService {
  constructor(
    @InjectRepository(Classification)
    private classificationRepository: Repository<Classification>,
  ) {}

  async findAll(): Promise<Classification[]> {
    return await this.classificationRepository.find();
  }

  async getClassificationByContentListId(
    contentListId: number,
  ): Promise<Classification[]> {
    return await this.classificationRepository.find({
      where: { contentList: { id: contentListId } },
    });
  }

  async getOrCreateClassification(
    classificationId: number,
  ): Promise<Classification[]> {
    return await this.classificationRepository.find({
      where: { id: classificationId },
    });
  }

  async create(name: string): Promise<Classification> {
    const item = new Classification();
    item.value = name;
    return await this.classificationRepository.save(item);
  }

  async updateClassificationContentList(
    content: ContentList,
    classification: Classification[],
  ): Promise<void> {
    const query = `
    DELETE FROM classification_content_list_content_list
    WHERE contentListId = ${content.id};

    INSERT INTO classification_content_list_content_list (classificationId, contentListId)
    VALUES (${classification[0].id}, ${content.id});
    `;
    await this.classificationRepository.query(query);
  }
}
