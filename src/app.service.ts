import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return (
      'Hello World! <br>' +
      'This is a test of the emergency broadcast system. <br>' +
      'This is only a test. <br>' +
      'Had this been an actual emergency, you would have been instructed where to tune in your area for news and official information. <br>' +
      'This concludes this test of the emergency broadcast system.'
    );
  }
}
