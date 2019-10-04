import { Injectable } from '@angular/core'
import { IUser } from './user.model'

@Injectable({
  providedIn: 'root'
})

export class AuthService {  

    currentUser:IUser

    loginUser(userName:string, password:string){
        //mockup login
        this.currentUser = {
            id: 1,
            firstName: 'Marco',
            lastName: 'Mascia',
            userName: userName   
        }    
    }

    isAuthenticated(){
        return !!this.currentUser;
    }
}