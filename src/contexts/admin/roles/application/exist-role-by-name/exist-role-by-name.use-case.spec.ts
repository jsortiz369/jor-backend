import { Test, TestingModule } from '@nestjs/testing';
import { ExistRoleByNameUseCase } from './exist-role-by-name.use-case';

describe('ExistRoleByNameUseCase', () => {
  let service: ExistRoleByNameUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExistRoleByNameUseCase],
    }).compile();

    service = module.get<ExistRoleByNameUseCase>(ExistRoleByNameUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
