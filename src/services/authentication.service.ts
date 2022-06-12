// @ts-nocheck
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { LoginResponse } from "src/models/login.model";
import { User } from "src/models/user.model";

@Injectable({providedIn: 'root'})
export class AuthenticationService {

    constructor(private httpClient: HttpClient) {}

    // public user?: User;

    // public login(username: string, password: string): Observable<LoginResponse> {
    //     const reqData = {
    //         username: username,
    //         password: password
    //     };
    //     const resp = this.httpClient.post<LoginResponse>(environment.baseUrl + 'login',
    //         JSON.stringify(reqData), { headers: { "Content-Type": "application/json" }});

    //     resp.subscribe((data) => {
    //         this.user = data?.user;
    //     });
    //     return resp;
    // }

    authUser(user: User) {
      let UserArray = [];
      if (localStorage.getItem('Users')) {
        UserArray = JSON.parse(localStorage.getItem('Users'));
      }
      return UserArray.find(p => p.email === user.email && p.password === user.password);
    }

    addUser(user) {
      let users = [];
      if (localStorage.getItem('Users')) {
        users = JSON.parse(localStorage.getItem('Users'));
        users = [...users, user];
      } else {
        users = [user];
      }
      localStorage.setItem('Users', JSON.stringify(users));
    }
}
