import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Http} from "@angular/http";

@Injectable()

export class Server {
  url = "http://127.0.0.1:8081/";

  constructor(private hc: HttpClient) {
  }

  returnToken() {
    var token = sessionStorage.getItem("token");
    if (token != null) {
      return token;
    }
    else {
      return "";
    }
  }

  header = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    // 'Content-Type': 'multipart/form-data',
    'authorization': this.returnToken()
  });

  SelectUserName(account) {
    var body = new HttpParams().set("phoneNumber", account).set("email", account);
    return this.hc.post(`${this.url}selectusername`, body.toString(), {headers: this.header});
  }

  Login(userName, password) {
    var body = new HttpParams().set("userName", userName).set("password", password);
    return this.hc.post(`${this.url}login`, body.toString(), {headers: this.header});
  }

  Register(userName, email, phoneNumber, password) {
    var body = new HttpParams().set("userName", userName).set("email", email).set("phoneNumber", phoneNumber).set("password", password);
    return this.hc.post(`${this.url}register`, body.toString(), {headers: this.header});
  }
  sendToken() {
    var body = new HttpParams();
    return this.hc.post(`${this.url}testToken`, body.toString(), {headers: this.header});
  }
  getInformation() {
    var body = new HttpParams();
    return this.hc.post(`${this.url}getinformation`, body.toString(), {headers: this.header});
  }
  changeInformation(userName, password, sex, year, month, day) {
    var body = new HttpParams().set("userName", userName).set("newPassword", password).set("sex", sex).set("year", year).set("month", month).set("day", day);
    return this.hc.post(`${this.url}changeinformation`, body.toString(), {headers: this.header})
  }
  upLoadVideo(title, explain, label, file) {
    let data = new FormData();
    data.append("title", title);
    data.append("explain", explain);
    data.append("label", label);
    data.append("video", file);
    data.append("token", sessionStorage.getItem("token"));
    return this.hc.post(`${this.url}uploadvideo`, data)
  }
}
