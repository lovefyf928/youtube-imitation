import { Component, OnInit } from '@angular/core';
import { Server } from "../../server";

@Component({
  selector: 'app-change-information',
  templateUrl: './change-information.component.html',
  styleUrls: ['./change-information.component.css']
})
export class ChangeInformationComponent implements OnInit {

  YearArr = [];
  MonthArr = [];
  DayArr = [];

  SelectYear = "1970";
  SelectMonth = "1";
  SelectDay = "1";

  sex = "";

  userName = "";

  newPassword = "";
  confirmPassword = "";

  constructor(private s: Server) { }

  getDay(m, y){
    if (m != 2) {
      let arr = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      return arr[m - 1];
    }
    else {
      if ((y % 4 == 0) && (y % 100 != 0 || y % 400 == 0)) {
        return 29;
      }
      else {
        return 28;
      }
    }
  }

  Day(){
    this.DayArr = [];
    let day = this.getDay(this.SelectMonth, this.SelectYear);
    console.log(day);
    for (var i = 1; i <= day; i ++) {
      if (i <= 9) {
        this.DayArr.push("0" + i);
      }
      else {
        this.DayArr.push(i);
      }
    }
  }

  Submit(){
    if (this.newPassword != "") {
      if (this.newPassword == this.confirmPassword && this.newPassword.length >= 6) {
        this.s.changeInformation(this.userName, this.confirmPassword, this.sex, this.SelectYear, this.SelectMonth, this.SelectDay).subscribe((res) => {
          alert(res.Msg);
          window.location.reload();
        }, (err) => {
          console.log(err);
        });
      }
      else {
        alert("your password format error");
      }
    }
    else {
      this.s.changeInformation(this.userName, this.confirmPassword, this.sex, this.SelectYear, this.SelectMonth, this.SelectDay).subscribe((res) => {
        alert(res.Msg);
        window.location.reload();
      }, (err) => {
        console.log(err);
      });
    }
  }


  ngOnInit() {
    this.s.getInformation().subscribe((res) => {
      console.log(res);
      this.userName = res.Data.UserName;
      this.sex = res.Data.Sex;
      if (res.Data.Birthday != null) {
        let date = res.Data.Birthday.split("-");
        this.SelectYear = date[0];
        this.SelectMonth = date[1];
        this.SelectDay = date[2];
      }
    }, (err) => {
      console.log(err);
    });
    let NowYear = new Date().getFullYear();
    let OldYear = 1970;
    for ( ; NowYear >= OldYear; OldYear ++ ) {
      this.YearArr.push(OldYear);
    }
    for (let i = 1; i <= 12; i ++) {
      if (i <= 9) {
        this.MonthArr.push("0" + i)
      }
      else {
        this.MonthArr.push(i)
      }
    }
    this.Day();
  }
}
