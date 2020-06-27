import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();
  });

  describe('findAll', () => {
    // TODO(cherry): write this test
    it.skip('should return user array', () => {
      const controller = app.get<UsersController>(UsersController);
      expect(controller.findAll()).toEqual([]);
    });
  });
});
