import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user.model';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user?: User;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    // this.user = this.authService.user;
  }

  public onLogin(user: User) {
    this.user = user;
}

}
