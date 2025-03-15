import { Test, TestingModule } from '@nestjs/testing';
import { FindAllRoleUseCase } from './find-all-role.use-case';

describe('FindAllRoleUseCase', () => {
  let service: FindAllRoleUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllRoleUseCase],
    }).compile();

    service = module.get<FindAllRoleUseCase>(FindAllRoleUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
