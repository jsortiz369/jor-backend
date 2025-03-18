import { Test, TestingModule } from '@nestjs/testing';
import { RoleCreateUseCase } from './role-create.use-case';

describe('RoleCreateUseCase', () => {
  let service: RoleCreateUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleCreateUseCase],
    }).compile();

    service = module.get<RoleCreateUseCase>(RoleCreateUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
