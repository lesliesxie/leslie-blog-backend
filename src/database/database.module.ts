/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-01-26 19:10:40
 * @LastEditors: leslie
 * @LastEditTime: 2024-03-25 22:43:33
 * 佛祖保佑没bug
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '072745h.',
      database: 'leslie',
      autoLoadEntities: true,
      synchronize: true,
      multipleStatements: true,
    }),
  ],
})
export class DatabaseModule {}
