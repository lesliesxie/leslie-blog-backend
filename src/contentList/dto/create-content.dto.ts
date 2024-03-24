/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-02-16 17:43:30
 * @LastEditors: leslie
 * @LastEditTime: 2024-03-24 20:02:16
 * 佛祖保佑没bug
 */
import { Classification } from 'src/classification/classification.entity';
import { LabelList } from 'src/labelList/labelList.entity';

export class CreateContentDto {
  author: string;
  title: string;
  content: string;
  likes: number;
  browse: number;
  label: LabelList[];
  createTime: Date;
  imgList: string[];
  classification: Classification[];
}
