/*
 * @Description: Stay hungry，Stay foolish
 * @Author: leslie
 * @Date: 2024-01-26 19:10:40
 * @LastEditors: leslie
 * @LastEditTime: 2024-01-26 19:15:40
 * 佛祖保佑没bug
 */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "123456",
      database: "leslie-blog",
      entities: [],
      synchronize: true,
    })
  ]
})
export class DatabaseModule {}