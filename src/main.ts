import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as morgan from 'morgan';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './shared/filters/http-exception/http-exception.filter';
import configEnv from './shared/global/env';

async function bootstrap() {
  const logger = new Logger();

  const app = await NestFactory.create(AppModule, { cors: true });

  // Global filters for http exceptions
  app.useGlobalFilters(new HttpExceptionFilter(logger));

  // logs http requests
  app.use(morgan('dev'));

  // global prefix
  app.setGlobalPrefix('/api/v1');

  // Enable CORS
  app.enableCors({
    origin: configEnv('CORS_ORIGIN'),
    methods: configEnv('CORS_ORIGIN_METHODS'),
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  // global pipes for validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // swagger docs
  const config = new DocumentBuilder()
    .setTitle('JOR API REST')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/docs', app, document);

  // Listen on the configured port
  await app.listen(configEnv('PORT'), (): void => {
    app
      .getUrl()
      .then((server) => logger.log(`Server listening on ${server}`))
      .catch((error) => logger.error(error));
  });
}
bootstrap().catch((error) => console.error(error));
