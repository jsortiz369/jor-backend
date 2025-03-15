import { Test, TestingModule } from '@nestjs/testing';
import { RoleFindAllUseCase } from './role-find-all.use-case';

describe('RoleFindAllUseCase', () => {
  let service: RoleFindAllUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleFindAllUseCase],
    }).compile();

    service = module.get<RoleFindAllUseCase>(RoleFindAllUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
