import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '89423000',
    database: 'contacts',
    entities: [],
    synchronize: true, // false로 하는 게 안전
  }),
 ],
 controllers: [AppController],
 providers: [AppService]
})
export class AppModule {}
