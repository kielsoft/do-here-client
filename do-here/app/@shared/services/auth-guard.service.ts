import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
const appSettings = require("application-settings");

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate() {
    // if (localStorage.getItem("token")!=null) {
    let token = appSettings.getString('token');
    if (!!token) {
      return true;
    }
    else {
      this.router.navigate(["./map"]);
      //this.router.navigate(["./login"]);
      return false;
    }
  }
}