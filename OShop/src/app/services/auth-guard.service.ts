import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authservice:AuthService,private router:Router) { }

canActivate() //CanActivate will subscribe Observable(see Docs). So instead of Subscribe we can use map.
{
return this.authservice.user$.map(user=>
{
  if(user) return true;
   
  this.router.navigate(['/login']);
  return false;
})
 
}
}
