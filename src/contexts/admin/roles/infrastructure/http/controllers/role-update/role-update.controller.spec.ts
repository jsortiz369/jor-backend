import { Test, TestingModule } from '@nestjs/testing';
import { RoleUpdateController } from './role-update.controller';

describe('RoleUpdateController', () => {
  let controller: RoleUpdateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleUpdateController],
    }).compile();

    controller = module.get<RoleUpdateController>(RoleUpdateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
