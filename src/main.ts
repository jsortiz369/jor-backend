import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './shared/infrastructure/global/filters/http-exception/http-exception.filter';

async function bootstrap() {
  const logger = new Logger();

  const app = await NestFactory.create(AppModule, { cors: true });

  // Global filters for http exceptions
  app.useGlobalFilters(new HttpExceptionFilter(logger));

  // global pipes for validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // global prefix
  app.setGlobalPrefix('/api/v1');

  // Listen on the configured port
  await app.listen(3000, (): void => {
    app
      .getUrl()
      .then((server) => logger.log(`Server listening on ${server}`))
      .catch((error) => logger.error(error));
  });
}
bootstrap().catch((error) => console.error(error));
