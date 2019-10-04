import { Component, Inject } from '@angular/core'
import { createOfflineCompileUrlResolver } from '@angular/compiler'
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {

    constructor(
      @Inject(AuthService) private authService:AuthService,
      @Inject(Router) private router:Router
    ){}
    
    userName
    password
    
    login(formValues){
        this.authService.loginUser(formValues.userName, formValues.password);        
        this.router.navigate(['events'])
    }
    cancel(){
      this.router.navigate(['events']);
    }
}