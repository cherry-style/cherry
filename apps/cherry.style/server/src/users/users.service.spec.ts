import { Test } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = app.get<UsersService>(UsersService);
  });

  describe('findAll', () => {
    // TODO(cherry): write this test
    it.skip('should return user array', () => {
      expect(service.findAll()).toEqual([]);
    });
  });
});
