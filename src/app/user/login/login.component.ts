import { Component, Inject } from "@angular/core";
import { createOfflineCompileUrlResolver } from "@angular/compiler";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./login.component.html",
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
    `
  ]
})
export class LoginComponent {
  constructor(
    @Inject(AuthService) private authService: AuthService,
    @Inject(Router) private router: Router
  ) {}

  userName;
  password;
  mouseoverLogin;

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(["events"]);
  }
  cancel() {
    this.router.navigate(["events"]);
  }
}
