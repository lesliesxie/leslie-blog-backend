/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-02-11 18:47:00
 * @LastEditors: leslie
 * @LastEditTime: 2024-03-24 18:27:12
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
export class Classification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @Column()
  text: string;

  @ManyToMany(() => ContentList, (contentList) => contentList.classification)
  @JoinTable()
  contentList: ContentList[];
}
