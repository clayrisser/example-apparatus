/*
 * File: /src/bootstrap/app.ts
 * Project: example-config-provider
 * File Created: 23-06-2021 09:48:46
 * Author: Clay Risser <email@clayrisser.com>
 * -----
 * Last Modified: 27-06-2021 02:34:09
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

import getPort from 'get-port';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import {
  ExpressAdapter,
  NestExpressApplication
} from '@nestjs/platform-express';
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify';
import { Adapter } from '~/types';
import { AppModule } from '~/app.module';

const logger = console;

export async function createApp(adapter: Adapter) {
  const app = await NestFactory.create<
    NestExpressApplication | NestFastifyApplication
  >(
    AppModule,
    adapter === Adapter.Fastify ? new FastifyAdapter() : new ExpressAdapter(),
    { bodyParser: true }
  );
  const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());
  if (configService.get('CORS') === '1') app.enableCors();
  return app;
}

export async function appListen(
  app: NestExpressApplication | NestFastifyApplication,
  adapter: Adapter
) {
  const configService = app.get(ConfigService);
  const port = await getPort({
    port: Number(configService.get('PORT') || 3000)
  });
  if (adapter === Adapter.Fastify) {
    const fastifyApp = app as NestFastifyApplication;
    await fastifyApp.listen(port, '0.0.0.0').catch(logger.error);
  } else {
    const expressApp = app as NestExpressApplication;
    await expressApp.listen(port, '0.0.0.0').catch(logger.error);
  }
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

declare const module: any;
