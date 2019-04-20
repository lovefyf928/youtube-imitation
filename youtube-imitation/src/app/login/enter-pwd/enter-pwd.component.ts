import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Server} from "../../server";

@Component({
  selector: 'app-enter-pwd',
  templateUrl: './enter-pwd.component.html',
  styleUrls: ['./enter-pwd.component.css']
})
export class EnterPwdComponent implements OnInit {
  userName: any;
  email: any;
  password: any;
  constructor(private ar: ActivatedRoute, private s: Server) { }

  login(){
    this.s.Login(this.userName, this.password).subscribe((res) => {
      console.log(res)
      if (res.Data != null) {
        alert(res.Data.msg);
        sessionStorage.setItem("token", res.Data.token);
      }
      else {
        alert(res.Msg);
      }
    })
  }

  ngOnInit() {
    this.ar.queryParams.subscribe((res) => {
      this.s.SelectUserName(res["account"]).subscribe((res) => {
        this.email = res.Data.email;
        this.userName = res.Data.userName;
      })
    })
  }

}
