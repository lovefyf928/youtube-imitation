import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  constructor(private r: Router) { }

  jump(){
    this.r.navigate([""]);
  }

  jumpToUpLoad(){
    this.r.navigate(["uploadvideo"]);
  }

  ngOnInit() {
  }

}
