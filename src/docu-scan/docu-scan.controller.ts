import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { OcrService } from 'src/ocr/ocr.service';
import { DocuScanService } from './docu-scan.service';

@Controller('docu-scan')
export class DocuScanController {
  constructor(private readonly DocuScanService: DocuScanService) { }

  @Get()
  getHello(): string {
    return this.DocuScanService.getHello();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    // Try catch if no file is uploaded
    try {
      console.log(file);
      return this.DocuScanService.parseImage(file.buffer);
    }
    catch (error) {
      throw new Error(error.message);
    }
  }
}