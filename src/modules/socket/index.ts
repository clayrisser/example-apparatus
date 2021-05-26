import { Module } from '@nestjs/common';
import { SocketController } from './socket.controller';

@Module({
  controllers: [SocketController],
  exports: [],
  providers: []
})
export default class SocketModule {}

export * from './socket.controller';
