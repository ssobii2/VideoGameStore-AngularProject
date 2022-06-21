// @ts-nocheck
import { Injectable } from "@angular/core";
import { User } from "src/models/user.model";

@Injectable({providedIn: 'root'})
export class AuthenticationService {

    constructor() {}

    // getting the user input data from local storage and matching it with the local storage data
    authUser(user: User) {
      let UserArray = [];
      if (localStorage.getItem('Users')) {
        UserArray = JSON.parse(localStorage.getItem('Users'));
      }
      return UserArray.find(p => p.email === user.email && p.password === user.password);
    }

    // getting the user input email from local storage and matching it with the local storage emails
    authUserEmail(user: User) {
      let UserArray = [];
      if (localStorage.getItem('Users')) {
        UserArray = JSON.parse(localStorage.getItem('Users'));
      }
      return UserArray.find(p => p.email === user.email);
    }

    // registration of the new user in local storage
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
