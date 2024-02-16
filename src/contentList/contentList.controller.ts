/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-02-16 16:42:59
 * @LastEditors: leslie
 * @LastEditTime: 2024-02-16 17:41:36
 * 佛祖保佑没bug
 */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContentListService } from './contentList.service';
import { ContentList } from './contentList.entity';
import { CreateContentDto } from './dto/create-content.dto';

@Controller('contentList')
export class ContentListController {
  constructor(private readonly contentListService: ContentListService) {}

  @Get()
  findAll(): Promise<ContentList[]> {
    return this.contentListService.findAll();
  }

  @Post()
  createContent(@Body() createContentDto: CreateContentDto) {
    return this.contentListService.createContent(createContentDto);
  }
}
