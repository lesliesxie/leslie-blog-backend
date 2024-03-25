/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-02-16 16:42:59
 * @LastEditors: leslie
 * @LastEditTime: 2024-03-25 22:11:36
 * 佛祖保佑没bug
 */
import { Classification } from 'src/classification/classification.entity';
import { LabelList } from 'src/labelList/labelList.entity';
import {
  Column,
  Entity,
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

  @ManyToMany(() => LabelList)
  label: LabelList[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createTime: Date;

  @Column('simple-array', { nullable: true })
  imgList: string[];

  @ManyToMany(() => Classification)
  classification: Classification[];
}
