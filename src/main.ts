import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000', // สำหรับตอนพัฒนา
      'https://dev-web-nextflix.onrender.com', // ใส่โดเมนจริงที่ Deploy Next.js
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  });
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
