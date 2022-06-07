import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { LoginResponse } from "src/models/login.model";
import { User } from "src/models/user.model";

@Injectable({providedIn: 'root'})
export class AuthenticationService {

    constructor(private httpClient: HttpClient) {}

    public user?: User;

    public login(username: string, password: string): Observable<LoginResponse> {
        const reqData = {
            username: username,
            password: password
        };
        console.log(reqData);
        const resp = this.httpClient.post<LoginResponse>(environment.baseUrl + 'login',
            JSON.stringify(reqData), { headers: { "Content-Type": "application/json" }});

        resp.subscribe((data) => {
            this.user = data?.user;
            // console.log(this.user);
        });
        return resp;
    }
}
