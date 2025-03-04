import { Test, TestingModule } from '@nestjs/testing';
import { NextflixsService } from './nextflixs.service';

describe('NextflixsService', () => {
  let service: NextflixsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NextflixsService],
    }).compile();

    service = module.get<NextflixsService>(NextflixsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
