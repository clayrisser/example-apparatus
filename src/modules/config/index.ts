import { Module } from '@nestjs/common';
import { ConfigController } from './config.controller';

@Module({
  controllers: [ConfigController],
  exports: [],
  providers: []
})
export default class ConfigModule {}

export * from './config.controller';
