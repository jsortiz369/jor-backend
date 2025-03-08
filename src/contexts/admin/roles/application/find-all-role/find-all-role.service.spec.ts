import { Test, TestingModule } from '@nestjs/testing';
import { FindAllRoleService } from './find-all-role.service';

describe('FindAllRoleService', () => {
  let service: FindAllRoleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllRoleService],
    }).compile();

    service = module.get<FindAllRoleService>(FindAllRoleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
