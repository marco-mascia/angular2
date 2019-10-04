
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { userRoutes } from './user.routes';
import { ProfileComponent } from './user.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [  
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  providers: [

  ]  
})
export class UserModule {}

