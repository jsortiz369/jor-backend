import { Test, TestingModule } from '@nestjs/testing';
import { RoleFindAllController } from './role-find-all.controller';

describe('RoleFindAllController', () => {
  let controller: RoleFindAllController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleFindAllController],
    }).compile();

    controller = module.get<RoleFindAllController>(RoleFindAllController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
