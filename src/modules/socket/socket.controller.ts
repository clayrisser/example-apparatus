import { Body, Controller, Get, Post } from '@nestjs/common';
import { Map } from '~/types';

@Controller('socket')
export class SocketController {
  @Get('ping')
  async getHealthz(): Promise<string> {
    return 'pong';
  }

  @Get('config')
  async getRoot() {
    console.log('socket config');
    return { hello: 'world' };
  }

  @Post('created')
  async postCreated(@Body() body: CreatedBody): Promise<void> {
    console.log('socket created');
  }

  @Post('coupled')
  async postCoupled(@Body() _body: CoupledBody): Promise<void> {
    console.log('socket coupled');
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
