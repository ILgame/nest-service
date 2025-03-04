import { Test, TestingModule } from '@nestjs/testing';
import { NextflixsController } from './nextflixs.controller';
import { NextflixsService } from './nextflixs.service';

describe('NextflixsController', () => {
  let controller: NextflixsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NextflixsController],
      providers: [NextflixsService],
    }).compile();

    controller = module.get<NextflixsController>(NextflixsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
