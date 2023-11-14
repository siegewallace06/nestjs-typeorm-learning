import { Injectable } from '@nestjs/common';
import * as tesseract from 'node-tesseract-ocr';

@Injectable()
export class OcrService {
    config = {
        lang: 'eng',
        oem: 1,
        psm: 4,
        binary: "C:\\Program Files\\Tesseract-OCR\\tesseract.exe"
    };

    async parseImage(imageBuffer) {
        // console
        try {
            console.log("Config: ", this.config)
            const res = await tesseract.recognize(imageBuffer, this.config)
            console.log(res)
        } catch (error) {
            console.log("GOING TO THROW ERROR: ", error.message)
        }
        // return tesseract
        //     .recognize(imageBuffer, this.config)
        //     .then((text) => {
        //         return text.split('\n');
        //     })
        //     .catch((error) => {
        //         console.log("ERROR FROM TESSERACT: ", error.message);
        //         throw new Error(error.message);
        //     });
    }
}