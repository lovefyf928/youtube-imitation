import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Server } from "../../server";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private r: Router, private s: Server) { }
  userName = "";
  phoneNumber = "";
  email = "";
  password = "";
  confirmPassword = "";
  jump(){
    this.r.navigate([""]);
  }
  createAccount(){
    var phoneTest = new RegExp("^1[34578]\\d{9}$");
    if (phoneTest.test(this.phoneNumber)) {
      if (this.password == this.confirmPassword) {
        this.s.Register(this.userName, this.email, this.phoneNumber, this.password).subscribe((res) => {
          alert(res.Msg);
          if (res.StatusCode == 200) {
            this.r.navigate([""]);
          }
        })
      }
      else {
        alert("Two password are different");
      }
    }
    else {
      alert("your phoneNum format error");
    }
  }
  ngOnInit() {
  }

}
