import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global prefix
  app.setGlobalPrefix('api');

  //Enable CORS
  app.enableCors({
    origin: 'http://localhost:3001', //Next.js frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
  })
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
