// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/services/authentication.service';
import { AlertifyService } from 'src/services/alertify.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registrationForm: FormGroup;
  user: User;
  userSubmitted: boolean;

  constructor(private fb: FormBuilder, private authService: AuthenticationService, private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  // validation of the registration form is done here
  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      userName: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  // registers a user in local storage when form is submitted
  onSubmit() {
    this.userSubmitted = true;
    if (this.registrationForm.valid) {
      this.authService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.alertify.success('Congratulations! You have successfully registered!');
  } else {
    this.alertify.error('Please fill in all the required fields!');
  }
}

// getting the user data based on user model
userData(): User {
    return this.user = {
      email: this.email.value,
      userName: this.userName.value,
      password: this.password.value
    }
}

  // getting the value of email, username and password respectively from input fields
  get email() {
    return this.registrationForm.get('email') as FormControl;
  }

  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }

}
