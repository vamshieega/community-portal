import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  send: any;
  constructor() { }

  ngOnInit(): void {
  }

  testVal(event) {
    this.send = event;
    console.log(this.send)
  }
}
