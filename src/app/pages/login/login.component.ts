import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user.model';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user?: User;

  /**
   * Basic constructor.
   * @param authService Authentication service handling the login process.
   */
  constructor(
    private authService: AuthenticationService,
    private router: Router) { }

  /**
   * Event listener fired when the login form is submitted.
   * @param event Event object with the form as target.
  */

   public onSubmit(event: Event) {
    // Prevent page reloading.
    event.preventDefault();
    // Access username and password strings.
    // const username = ((event.target as HTMLFormElement).username as HTMLInputElement).value;
    // const password = ((event.target as HTMLFormElement).password as HTMLInputElement).value;
    const input1 = document.getElementById('exampleInputEmail1') as HTMLFormElement;
    const username = input1['value'];
    const input2 = document.getElementById('exampleInputPassword1') as HTMLInputElement;
    const password = input2['value'];
    //TODO: Front-end validation!
    console.log(username, password);
    // Get login response.
    this.authService.login(username, password).subscribe(response => {
        if (response.validationError) {
            // Login error.
            //TODO: Display validation error!
        } else {
            // Login successful.
            this.user = response.user;
            this.router.navigate(['/']);
        }
    });
}

  ngOnInit(): void {
  }

}
