import { Test, TestingModule } from '@nestjs/testing';
import { RoleFindByIdController } from './role-find-by-id.controller';

describe('RoleFindByIdController', () => {
  let controller: RoleFindByIdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleFindByIdController],
    }).compile();

    controller = module.get<RoleFindByIdController>(RoleFindByIdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
