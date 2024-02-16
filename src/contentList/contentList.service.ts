/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-02-16 16:43:01
 * @LastEditors: leslie
 * @LastEditTime: 2024-02-16 20:47:41
 * 佛祖保佑没bug
 */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContentList } from './contentList.entity';
import { Repository } from 'typeorm';
import { ClassificationService } from 'src/classification/classification.service';

@Injectable()
export class ContentListService {
  constructor(
    @InjectRepository(ContentList)
    private contentListRepository: Repository<ContentList>,
    private classificationService: ClassificationService,
  ) {}

  async findAll(): Promise<ContentList[]> {
    const contentList = await this.contentListRepository.find();
    const contentListWithClassification: ContentList[] = [];
    for (const list of contentList) {
      console.log(
        await this.classificationService.getClassificationByContentListId(
          list.id,
        ),
      );

      const classification =
        await this.classificationService.getClassificationByContentListId(
          list.id,
        );
      console.log('classification', classification);

      contentListWithClassification.push({ ...list, classification });
    }
    return contentListWithClassification;
  }

  async createContent(data: Partial<ContentList>): Promise<ContentList> {
    const content = this.contentListRepository.create(data);
    return await this.contentListRepository.save(content);
  }
}
