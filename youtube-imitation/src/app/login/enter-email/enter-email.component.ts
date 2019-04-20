import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-enter-email',
  templateUrl: './enter-email.component.html',
  styleUrls: ['./enter-email.component.css']
})
export class EnterEmailComponent implements OnInit {
  account: any;
  constructor(private r: Router) { }

  jump(){
    this.r.navigate(["login/enterpwd"], {queryParams: {"account": this.account}})
  }
  ngOnInit() {
  }

}
