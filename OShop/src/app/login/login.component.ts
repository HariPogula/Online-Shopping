import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';//Due to accessing limited features for authentication, we need to import everything.

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private afAuth:AngularFireAuth) {
    
   }
login()
{
this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
}
  
}
