import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()

export class Server {
  url = "http://127.0.0.1:8081/";

  constructor(private hc: HttpClient) {
  }
  SelectUserName(account) {
    var body = new HttpParams().set("phoneNumber", account).set("email", account)
    return this.hc.post(`${this.url}selectusername`, body.toString(), {headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    });
  }
}
