/*
 * File: /src/types/index.ts
 * Project: example-config-provider
 * File Created: 23-06-2021 09:48:46
 * Author: Clay Risser <email@clayrisser.com>
 * -----
 * Last Modified: 27-06-2021 03:13:52
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

import { GraphbackContext } from 'graphback';
import { Request, Response } from 'express';
import { Plug, Socket } from './integrationOperator';

export enum Adapter {
  Express = 'express',
  Fastify = 'fastify'
}

export interface GraphqlCtx extends GraphbackContext {
  req: Request;
  res: Response;
}

export interface HashMap<T = any> {
  [key: string]: T;
}

export interface CreatedBody {
  plug: Plug;
  version: string;
}

export interface CoupledBody {
  plug: Plug;
  plugConfig: HashMap<string>;
  socket: Socket;
  socketConfig: HashMap<string>;
  version: string;
}
export interface UpdatedBody {
  version: string;
  plug: Plug;
  socketConfig: HashMap<string>;
  plugConfig: HashMap<string>;
  socket: Socket;
}

export interface DecoupledBody {
  plug: Plug;
  socket: Socket;
  version: string;
}

export interface DeletedBody {
  plug: Plug;
  socket: Socket;
  version: string;
}

export interface ConfigBody {
  data: HashMap<string>;
  plug: Plug;
  version: string;
}

export * from './integrationOperator';
