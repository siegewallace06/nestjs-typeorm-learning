import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    const response = {
      message: "Backend is running"
    }
    return response;
  }
}
