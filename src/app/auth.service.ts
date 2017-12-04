import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable} from 'rxjs/Observable';
import * as firebase from 'firebase';
import { ActivatedRoute } from "@angular/router";
import { AppUser } from "./models/AppUser-model";
import 'rxjs/add/observable/of'; 
import 'rxjs/add/operator/switchMap';
import { UserService } from "./user.service";
@Injectable()
export class AuthService {
user$ : Observable<firebase.User>;
  constructor(public authAf:AngularFireAuth, private route:ActivatedRoute,private userService:UserService) {
    this.user$=authAf.authState;
   }

  login()
  {  
    let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl);
     this.authAf.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

  }
  logout(){
     this.authAf.auth.signOut();
  }

  get appUser$():Observable<AppUser>{
    return this.user$.switchMap(user =>{
      if(user)
      return this.userService.get(user.uid);
      return Observable.of(null);
    });
    
  }
}
