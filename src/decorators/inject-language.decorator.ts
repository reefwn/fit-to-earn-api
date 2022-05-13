import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const InjectLanguage = createParamDecorator(
  (_, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    return request['accept-language'] === 'th'
      ? request['accept-language']
      : 'en';
  },
);
