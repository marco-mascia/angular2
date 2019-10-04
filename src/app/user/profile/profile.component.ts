import { Component, OnInit, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(
    @Inject(AuthService) private authService: AuthService,
    @Inject(Router) private router: Router
  ) {}

  private firstName: FormControl;
  private lastName: FormControl;

  ngOnInit() {
    //fields
    this.firstName = new FormControl(
      this.authService.currentUser.firstName,
      Validators.required
    );
    this.lastName = new FormControl(
      this.authService.currentUser.lastName,
      Validators.required
    );

    //fields group
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel() {
    this.router.navigate(["events"]);
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(
        formValues.firstName,
        formValues.lastName
      );
      this.router.navigate(["events"]);
    }
  }

  validateLastName() {
    return this.lastName.valid && this.lastName.untouched;
  }
  validateFirstName() {
    return this.firstName.valid && this.firstName.untouched;
  }
}
