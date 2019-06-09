import { Component, OnInit } from '@angular/core';
import { Server } from "../../server";
import { Router } from "@angular/router";

@Component({
  selector: 'app-up-load-video',
  templateUrl: './up-load-video.component.html',
  styleUrls: ['./up-load-video.component.css']
})
export class UpLoadVideoComponent implements OnInit {

  constructor(private s: Server, private  r: Router) { }

  title = "";
  explain = "";
  label = "";
  file = null;
  file2 = null;

  getFile(e) {
    this.file = e.srcElement.files[0];
  }

  getFile2(e){
    this.file2 = e.srcElement.files[0];
  }

  upload(){
    this.s.upLoadVideo(this.title, this.explain, this.label, this.file, this.file2).subscribe((res) => {
      alert(res.Msg);
      if (res.StatusCode == 200) {
        this.r.navigate([""]);
      }
    }, (err) => {
      console.log(err);
    })
  }

  ngOnInit() {
  }

}
