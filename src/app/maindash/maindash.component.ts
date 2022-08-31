import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maindash',
  templateUrl: './maindash.component.html',
  styleUrls: ['./maindash.component.css']
})
export class MaindashComponent implements OnInit {
  name = "";
  pass="";

  constructor() { }

  ngOnInit(): void {
  }
  givename(){
  console.log();

  }
  givepassword(){
    return this.pass;
  }

}
