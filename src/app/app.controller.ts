import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AppDto } from './app.dto';

@Controller('app')
export class AppController {
  @Post('/')
  getHello(@Body() body: AppDto) {
    console.log(body);
    throw new BadRequestException([`campos no existend`]);
    return 'Hello World!';
  }
}
