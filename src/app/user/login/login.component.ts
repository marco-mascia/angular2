import { Component, Inject } from '@angular/core'
import { createOfflineCompileUrlResolver } from '@angular/compiler'
import { AuthService } from '../auth.service'

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {

    constructor(@Inject(AuthService) private authService:AuthService){}
    
    userName
    password
    
    login(formValues){
        this.authService.loginUser(formValues.userName, formValues.password);        
    }
}