/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-02-16 16:43:01
 * @LastEditors: leslie
 * @LastEditTime: 2024-03-25 23:01:29
 * 佛祖保佑没bug
 */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContentList } from './contentList.entity';
import { Repository } from 'typeorm';
import { ClassificationService } from 'src/classification/classification.service';
import { LabelListService } from 'src/labelList/labelList.service';

@Injectable()
export class ContentListService {
  constructor(
    @InjectRepository(ContentList)
    private contentListRepository: Repository<ContentList>,
    private classificationService: ClassificationService,
    private labelListService: LabelListService,
  ) {}

  async findAll(): Promise<ContentList[]> {
    const contentList = await this.contentListRepository.find();
    const contentListWithClassificationAndLabel: ContentList[] = [];
    for (const list of contentList) {
      const classification =
        await this.classificationService.getClassificationByContentListId(
          list.id,
        );
      const label = await this.labelListService.getLabelListByContentListId(
        list.id,
      );
      contentListWithClassificationAndLabel.push({
        ...list,
        classification,
        label,
      });
    }
    return contentListWithClassificationAndLabel;
  }

  async createContent(data: Partial<ContentList>): Promise<ContentList> {
    const content = this.contentListRepository.create(data);

    const classification =
      await this.classificationService.getOrCreateClassification(
        data.classification as unknown as number,
      );
    const labelList = [];
    for (const i of data.label) {
      labelList.push(
        await this.labelListService.getOrCreateLabelList(
          i as unknown as number,
        ),
      );
    }
    const savedContent = await this.contentListRepository.save(content);
    await this.labelListService.updateLabelListContentList(content, labelList);
    await this.classificationService.updateClassificationContentList(
      content,
      classification,
    );

    return savedContent;
  }
}
