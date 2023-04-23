import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BeltGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    //request will have a url, incoming cookies etc..
    const request = context.switchToHttp().getRequest();

    //validate request
    const hasBlackBelt = request.body.type.includes('client');

    return hasBlackBelt;
  }
}
