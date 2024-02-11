/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-02-11 18:47:00
 * @LastEditors: leslie
 * @LastEditTime: 2024-02-11 18:51:48
 * 佛祖保佑没bug
 */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Classification {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}
