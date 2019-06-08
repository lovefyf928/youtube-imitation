import { Component, OnInit } from '@angular/core';
import { Server } from "../../server";

@Component({
  selector: 'app-up-load-video',
  templateUrl: './up-load-video.component.html',
  styleUrls: ['./up-load-video.component.css']
})
export class UpLoadVideoComponent implements OnInit {

  constructor(private s: Server) { }

  title = "";
  explain = "";
  label = "";
  file = null;

  getFile(e) {
    this.file = e.srcElement.files[0]
  }

  upload(){
    console.log(this.file);
    this.s.upLoadVideo(this.title, this.explain, this.label, this.file).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    })
  }

  ngOnInit() {
  }

}
