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
  constructor(private ar: ActivatedRoute, private s: Server) { }

  ngOnInit() {
    this.ar.queryParams.subscribe((res) => {
      this.s.SelectUserName(res["account"]).subscribe((res) => {
        console.log(res);
        res.Data.email = this.email;
        res.Data.userName = this.userName;
      })
    })
  }

}
