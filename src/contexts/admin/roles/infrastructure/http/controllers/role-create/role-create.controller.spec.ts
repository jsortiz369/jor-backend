import { Test, TestingModule } from '@nestjs/testing';
import { RoleCreateController } from './role-create.controller';

describe('RoleCreateController', () => {
  let controller: RoleCreateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleCreateController],
    }).compile();

    controller = module.get<RoleCreateController>(RoleCreateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
