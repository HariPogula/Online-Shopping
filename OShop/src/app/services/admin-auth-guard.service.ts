import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';

import 'rxjs/add/operator/map';
@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(public authservice:AuthService,public userservice:UserService) { }
canActivate():Observable<boolean>
{
  return this.authservice.appUser$
  .map(appUser => appUser.isAdmin)
  }
}
