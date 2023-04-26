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
    console.log(request.body); //is empty in getAllUsers and others services..
    const hasBlackBelt = true; /* request.body.type.includes('client') */

    /* for example in the future, if you are admin, you can request a list o users 
    ...
    */

    return hasBlackBelt;
  }
}
