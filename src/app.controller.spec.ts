import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.findAll()).toBe(
        'Hello World! <br>' +
          'This is a test of the emergency broadcast system. <br>' +
          'This is only a test. <br>' +
          'Had this been an actual emergency, you would have been instructed where to tune in your area for news and official information. <br>' +
          'This concludes this test of the emergency broadcast system.',
      );
    });
  });
});
