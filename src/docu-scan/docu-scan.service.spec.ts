import { Test, TestingModule } from '@nestjs/testing';
import { DocuScanService } from './docu-scan.service';

describe('DocuScanService', () => {
  let service: DocuScanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocuScanService],
    }).compile();

    service = module.get<DocuScanService>(DocuScanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
