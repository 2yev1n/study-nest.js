import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
@Controller()
export class AppController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}
