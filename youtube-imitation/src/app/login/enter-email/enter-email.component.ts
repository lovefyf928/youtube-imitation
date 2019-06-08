import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Server } from "../../server";

@Component({
  selector: 'app-enter-email',
  templateUrl: './enter-email.component.html',
  styleUrls: ['./enter-email.component.css']
})
export class EnterEmailComponent implements OnInit {
  account: any;
  constructor(private r: Router, private s: Server) { }

  jump() {
    this.s.SelectUserName(this.account).subscribe((res) => {
      console.log(res);
      if (res.Data != null) {
        this.r.navigate(["login/enterpwd"], {queryParams: {email: res.Data.Email, userName: res.Data.UserName}})
      }
      else {
        alert(res.Msg);
      }
    })
  }

  create(){
    this.r.navigate(["login/register"]);
  }
  ngOnInit() {
  }

}
