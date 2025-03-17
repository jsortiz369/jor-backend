import { Test, TestingModule } from '@nestjs/testing';
import { RoleDeleteController } from './role-delete.controller';

describe('RoleDeleteController', () => {
  let controller: RoleDeleteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleDeleteController],
    }).compile();

    controller = module.get<RoleDeleteController>(RoleDeleteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
