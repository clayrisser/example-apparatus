import { Controller, Get, Render } from '@nestjs/common';

@Controller('config')
export class ConfigController {
  @Get()
  getRoot() {
    return { hello: 'world' };
  }
}
