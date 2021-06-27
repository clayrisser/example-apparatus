/*
 * File: /src/bootstrap/ejs.ts
 * Project: example-config-provider
 * File Created: 23-06-2021 09:48:46
 * Author: Clay Risser <email@clayrisser.com>
 * -----
 * Last Modified: 27-06-2021 02:34:13
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

import path from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { Adapter } from '~/types';

const rootPath = path.resolve(__dirname, '../..');

export async function registerEjs(
  app: NestExpressApplication | NestFastifyApplication,
  adapter: Adapter
) {
  if (adapter === Adapter.Fastify) {
    const ejs = await import('ejs');
    const fastifyApp = app as NestFastifyApplication;
    fastifyApp.useStaticAssets({
      root: path.join(rootPath, 'public'),
      prefix: '/public/'
    });
    fastifyApp.setViewEngine({
      engine: { handlebars: ejs },
      templates: path.join(rootPath, 'views')
    });
  } else {
    const expressApp = app as NestExpressApplication;
    expressApp.useStaticAssets(path.resolve(rootPath, 'public'));
    expressApp.setBaseViewsDir(path.resolve(rootPath, 'views'));
    expressApp.setViewEngine('ejs');
  }
}
