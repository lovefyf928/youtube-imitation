import { Component, OnInit } from '@angular/core';
import { Server } from "../../../server";
import { Router } from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private s: Server, private r: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem("token") != null) {
      this.s.sendToken().subscribe((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      })
    }
    else {
      alert("plz login");
      this.r.navigate([""])
    }
  }

}
