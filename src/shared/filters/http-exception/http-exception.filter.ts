import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: Logger) {}

  catch(exception: HttpException | Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // get status, if not default INTERNAL_SERVER_ERROR
    const httpStatus = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    // get error message, if not default Internal server error
    const message = exception.message ? exception.message : 'Internal server error';

    // we build the message
    const error: { message: string | string[] } = { message: [message] };

    // if it's an instance of HttpException
    if (exception instanceof HttpException) error.message = exception.getResponse()['message'] as string[];

    this.logger.error(`${request.method} ${request.url} ${httpStatus}`);

    response.status(httpStatus).json({ statusCode: httpStatus, timestamp: new Date().toISOString(), error });
  }
}
