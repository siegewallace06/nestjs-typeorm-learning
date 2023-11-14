import { Test, TestingModule } from '@nestjs/testing';
import { DocuScanController } from './docu-scan.controller';
import { DocuScanService } from './docu-scan.service';

describe('DocuScanController', () => {
  let controller: DocuScanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocuScanController],
      providers: [DocuScanService],
    }).compile();

    controller = module.get<DocuScanController>(DocuScanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
