import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('App Port');
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  const port = process.env.APP_PORT || 3000; 
  const prefix = process.env.API_PREFIX;
  app.setGlobalPrefix(prefix);
  await app.listen(port);
  logger.log(`Application is running on port ${port} with prefix ${prefix}`);
}
bootstrap();
