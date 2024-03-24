/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-03-24 17:39:05
 * @LastEditors: leslie
 * @LastEditTime: 2024-03-24 18:27:54
 * 佛祖保佑没bug
 */

import { ContentList } from 'src/contentList/contentList.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class LabelList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @Column()
  text: string;

  @ManyToMany(() => ContentList, (contentList) => contentList.label)
  @JoinTable()
  contentList: ContentList[];
}
