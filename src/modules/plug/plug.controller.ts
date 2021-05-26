import { Body, Controller, Get, Post } from '@nestjs/common';
import { Map } from '~/types';

@Controller('plug')
export class PlugController {
  @Get('ping')
  async getHealthz(): Promise<string> {
    return 'pong';
  }

  @Get('config')
  async getRoot() {
    return { hello: 'world' };
  }

  @Post('created')
  async postCreated(@Body() _body: CreatedBody): Promise<void> {
    console.log('plug created');
  }

  @Post('coupled')
  async postCoupled(@Body() _body: CoupledBody): Promise<void> {
    console.log('plug coupled');
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

export type Plug = Map;

export type Socket = Map;
