import { NestFactory } from '@nestjs/core';
import { appendFile } from 'fs';
import { createConnection } from 'net';
import { getConnectionOptions } from 'typeorm';
import { AppModule } from './app.module';
const PORT = process.env.PORT||3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  console.log(PORT + "번 포트에서 대기 중");
}

bootstrap();
