/*
 * File: /src/bootstrap/swagger.ts
 * Project: example-config-provider
 * File Created: 23-06-2021 09:48:46
 * Author: Clay Risser <email@clayrisser.com>
 * -----
 * Last Modified: 27-06-2021 02:34:18
 * Modified By: Clay Risser <email@clayrisser.com>
 * -----
 * Silicon Hills LLC (c) Copyright 2021
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
