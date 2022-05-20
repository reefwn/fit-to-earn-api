import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'fastify-helmet';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let stack: any;
    if (process.env.APP_ENV !== 'production') {
      stack = exception.stack;
    }
    if (exception && exception.response && exception.response.message) {
      return response.status(status).json({
        ok: false,
        error: {
          ...exception.response,
          message: exception.response.message,
          meta: exception.response.meta,
          stack,
        },
      });
    }
    response.status(status).json({
      ok: false,
      error: {
        ...exception.response,
        stack,
      },
    });
  }
}
