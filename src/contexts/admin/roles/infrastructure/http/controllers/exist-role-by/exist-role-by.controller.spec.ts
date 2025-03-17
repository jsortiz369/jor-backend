import { Test, TestingModule } from '@nestjs/testing';
import { ExistRoleByController } from './exist-role-by.controller';

describe('ExistRoleByController', () => {
  let controller: ExistRoleByController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExistRoleByController],
    }).compile();

    controller = module.get<ExistRoleByController>(ExistRoleByController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
