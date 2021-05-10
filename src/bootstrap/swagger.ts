import fs from 'fs-extra';
import path from 'path';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const pkg = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../../package.json')).toString()
);

export function registerSwagger(
  app: NestExpressApplication | NestFastifyApplication
) {
  const configService = app.get(ConfigService);
  if (
    configService.get('SWAGGER') === '1' ||
    configService.get('DEBUG') === '1'
  ) {
    const options = new DocumentBuilder()
      .setTitle(pkg.name)
      .setDescription(pkg.description)
      .setVersion(pkg.version)
      .build();
    const openApiObject = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, openApiObject);
  }
}
