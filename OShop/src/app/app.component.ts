import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(private authservice:AuthService,private router:Router) {
   authservice.user$.subscribe(user=>
  {
    if(user)
    {
      let returnUrl=localStorage.getItem('returnUrl')
      this.router.navigateByUrl(returnUrl);
    }
  })
    
  }
}
