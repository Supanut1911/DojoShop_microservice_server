import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public shoutOut(message): string {
    return `hello + ${message.messageInput}`
  }
}
