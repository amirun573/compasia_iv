import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as expressListRoutes from 'express-list-routes';
import {ValidationPipe} from '@nestjs/common'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);


  //List down all route available.
  expressListRoutes(app.getHttpServer()._events.request._router);
}
bootstrap();
