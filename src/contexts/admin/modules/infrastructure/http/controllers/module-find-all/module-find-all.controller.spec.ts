import { Test, TestingModule } from '@nestjs/testing';
import { ModuleFindAllController } from './module-find-all.controller';

describe('ModuleFindAllController', () => {
  let controller: ModuleFindAllController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModuleFindAllController],
    }).compile();

    controller = module.get<ModuleFindAllController>(ModuleFindAllController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
