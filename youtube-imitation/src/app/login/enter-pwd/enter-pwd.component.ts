import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {Server} from "../../server";

@Component({
  selector: 'app-enter-pwd',
  templateUrl: './enter-pwd.component.html',
  styleUrls: ['./enter-pwd.component.css']
})
export class EnterPwdComponent implements OnInit {
  userName: any;
  email: any;
  password = "";
  constructor(private ar: ActivatedRoute, private s: Server, private r: Router) { }

  login() {
    if (this.password != "") {
      this.s.Login(this.userName, this.password).subscribe((res) => {
        console.log(res);
        if (res.Data != null) {
          alert(res.Data.msg);
          sessionStorage.setItem("token", res.Data.token);
          this.r.navigate(["setting/account"]);
        } else {
          alert("your password error");
        }
      })
    }
  }

  ngOnInit() {
    this.ar.queryParams.subscribe((res) => {
      console.log(res);
      this.userName = res["userName"];
      this.email = res["email"];
    })
  }
}
