import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import { UserService } from "./user.service";
import { AuthService } from "./auth.service";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuardAdminService implements CanActivate {

  constructor(private userService:UserService,private authService:AuthService) { }

  canActivate():Observable<boolean>  {
    return this.authService.appUser$.map(appUser => appUser.isAdmin);


  }

}
