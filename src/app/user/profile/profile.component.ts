import { Component, OnInit, Inject } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./profile.component.html"
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(
    @Inject(AuthService) private authService: AuthService,
    @Inject(Router) private router: Router
  ) {}

  ngOnInit() {
    //fields
    let firstName = new FormControl(this.authService.currentUser.firstName);
    let lastName = new FormControl(this.authService.currentUser.lastName);

    //fields group
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }

  cancel() {
    this.router.navigate(["events"]);
  }

  saveProfile(formValues) {
    this.authService.updateCurrentUser(
      formValues.firstName,
      formValues.lastName
    );
  }
}
