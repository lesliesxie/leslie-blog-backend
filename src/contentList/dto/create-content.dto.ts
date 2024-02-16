/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-02-16 17:43:30
 * @LastEditors: leslie
 * @LastEditTime: 2024-02-16 18:40:40
 * 佛祖保佑没bug
 */
import { Classification } from 'src/classification/classification.entity';

export class CreateContentDto {
  author: string;
  title: string;
  content: string;
  likes: number;
  browse: number;
  imgList: string[];
  classification: Classification[];
}
