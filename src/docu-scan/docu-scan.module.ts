import { Module } from '@nestjs/common';
import { DocuScanService } from './docu-scan.service';
import { DocuScanController } from './docu-scan.controller';
import { OcrModule } from 'src/ocr/ocr.module';

@Module({
  imports: [OcrModule],
  controllers: [DocuScanController],
  providers: [DocuScanService],
})
export class DocuScanModule { }
