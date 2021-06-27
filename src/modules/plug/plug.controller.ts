import { Body, Controller, Get, Post } from '@nestjs/common';
import { Map } from '~/types';

@Controller('plug')
export class PlugController {
  @Get('ping')
  async getHealthz(): Promise<string> {
    return 'pong';
  }

  @Post('config')
  async postConfig(@Body() body: PostConfigBody) {
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
  async postUpdated(@Body() _body: CoupledBody): Promise<void> {
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

export interface CreatedBody {
  version: string;
  plug: Plug;
}

export interface CoupledBody {
  version: string;
  plug: Plug;
  socketConfig: Map;
  plugConfig: Map;
  socket: Socket;
}

export interface DecoupledBody {
  version: string;
  plug: Plug;
  socket: Socket;
}

export interface DeletedBody {
  version: string;
  plug: Plug;
  socket: Socket;
}

export interface PostConfigBody {
  data: Map;
  plug: Plug;
  version: string;
}

export type Plug = Map;

export type Socket = Map;
