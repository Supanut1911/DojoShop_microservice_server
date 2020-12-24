import { Controller, Get, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';

interface IString {
  message: string
}

@Controller()
export class AppController {
  private logger = new Logger('AppController')

  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AppController', 'ShoutOut')
  shoutOut(
    messageInput
  ): IString {
    this.logger.log('shoutOut' + messageInput.message)
    return {
      message: this.appService.shoutOut(messageInput)
    }
  }
}
