/*
 * File: /src/modules/plug/plug.controller.ts
 * Project: example-config-provider
 * File Created: 23-06-2021 09:48:46
 * Author: Clay Risser <email@clayrisser.com>
 * -----
 * Last Modified: 27-06-2021 03:13:42
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

import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ConfigBody,
  CoupledBody,
  CreatedBody,
  DecoupledBody,
  DeletedBody,
  UpdatedBody
} from '~/types';

@Controller('plug')
export class PlugController {
  @Get('ping')
  async getHealthz(): Promise<string> {
    return 'pong';
  }

  @Post('config')
  async postConfig(@Body() body: ConfigBody) {
    console.log('plug config');
    return body?.data || {};
  }

  @Post('created')
  async postCreated(@Body() _body: CreatedBody): Promise<void> {
    console.log('plug created');
  }

  @Post('coupled')
  async postCoupled(@Body() body: CoupledBody): Promise<void> {
    console.log('plug coupled', body?.socketConfig);
  }

  @Post('updated')
  async postUpdated(@Body() _body: UpdatedBody): Promise<void> {
    console.log('plug updated');
  }

  @Post('decoupled')
  async postDecoupled(@Body() _body: DecoupledBody): Promise<void> {
    console.log('plug decoupled');
  }

  @Post('deleted')
  async postDeleted(@Body() _body: DeletedBody): Promise<void> {
    console.log('plug deleted');
  }
}
