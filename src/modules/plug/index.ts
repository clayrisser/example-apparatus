import { Module } from '@nestjs/common';
import { PlugController } from './plug.controller';

@Module({
  controllers: [PlugController],
  exports: [],
  providers: []
})
export default class SocketModule {}

export * from './plug.controller';
