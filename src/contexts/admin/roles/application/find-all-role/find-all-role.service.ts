import { Injectable } from '@nestjs/common';
import { QueryFilters } from 'src/contexts/shared/interfaces/system.interface';

@Injectable()
export class FindAllRoleService {
  constructor() {}

  async execute(query: QueryFilters) {
    console.log(query);
    return await 'prueba';
  }
}
