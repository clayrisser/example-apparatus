import { Body, Controller, Get, Post } from '@nestjs/common';
import { Map } from '~/types';

@Controller('socket')
export class SocketController {
  @Get('ping')
  async getHealthz(): Promise<string> {
    return 'pong';
  }

  @Post('config')
  async postConfig(@Body() body: PostConfigBody) {
    console.log('socket config');
    return body?.socketMeta || {};
  }

  @Post('created')
  async postCreated(@Body() body: CreatedBody): Promise<void> {
    console.log('socket created');
  }

  @Post('coupled')
  async postCoupled(@Body() body: CoupledBody): Promise<void> {
    console.log('socket coupled', body?.plugConfig);
  }

  @Post('updated')
  async postUpdated(@Body() _body: CoupledBody): Promise<void> {
    console.log('socket updated');
  }

  @Post('decoupled')
  async postDecoupled(@Body() _body: DecoupledBody): Promise<void> {
    console.log('socket decoupled');
  }

  @Post('deleted')
  async postDeleted(@Body() _body: DeletedBody): Promise<void> {
    console.log('socket deleted');
  }
}

export interface CreatedBody {
  version: string;
  socket: Socket;
}

export interface CoupledBody {
  plug: Plug;
  plugConfig: Map;
  socket: Socket;
  socketConfig: Map;
  version: string;
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
  version: string;
  socket: Socket;
  socketMeta: Map;
}

export type Plug = Map;

export type Socket = Map;
