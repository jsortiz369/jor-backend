import { Test, TestingModule } from '@nestjs/testing';
import { RoleFindByIdUseCase } from './role-find-by-id.use-case';

describe('RoleFindByIdUseCase', () => {
  let service: RoleFindByIdUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleFindByIdUseCase],
    }).compile();

    service = module.get<RoleFindByIdUseCase>(RoleFindByIdUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
