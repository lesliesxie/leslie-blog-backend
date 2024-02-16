/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-02-16 16:42:59
 * @LastEditors: leslie
 * @LastEditTime: 2024-02-16 19:59:18
 * 佛祖保佑没bug
 */
import { Classification } from 'src/classification/classification.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ContentList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  author: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  likes: number;

  @Column()
  browse: number;

  @Column('simple-array', { nullable: true })
  imgList: string[];

  @ManyToMany(() => Classification)
  @JoinTable()
  classification: Classification[];
}
