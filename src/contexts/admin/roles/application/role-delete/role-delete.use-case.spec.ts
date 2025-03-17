import { Test, TestingModule } from '@nestjs/testing';
import { RoleDeleteUseCase } from './role-delete.use-case';

describe('RoleDeleteUseCase', () => {
  let service: RoleDeleteUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleDeleteUseCase],
    }).compile();

    service = module.get<RoleDeleteUseCase>(RoleDeleteUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
