import { AppUser } from './../models/app-user';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
appuser:AppUser;
//We nee dto unsubsribe in OnDestroy(). Instead, we can use asyc pipe.So
  //user$:Observable<firebase.User>; Coming from service Constructor
  constructor(private authservice:AuthService) { 
//this.user$=afAuth.authState;
    this.authservice.appUser$.subscribe(appuser=>this.appuser=appuser)
  }

  ngOnInit() {
  }
  logout()
  {
this.authservice.logout();
  }
}
