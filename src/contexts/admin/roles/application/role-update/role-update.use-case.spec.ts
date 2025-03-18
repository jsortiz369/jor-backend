import { Test, TestingModule } from '@nestjs/testing';
import { RoleUpdateUseCase } from './role-update.use-case';

describe('RoleUpdateUseCase', () => {
  let service: RoleUpdateUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleUpdateUseCase],
    }).compile();

    service = module.get<RoleUpdateUseCase>(RoleUpdateUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
