import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-connect-header',
  templateUrl: './connect-header.component.html',
  styleUrls: ['./connect-header.component.scss']
})
export class ConnectHeaderComponent implements OnInit {


  @Output() searchTextMsg = new EventEmitter<string>();
  searchText: FormControl = new FormControl();
  public selectControl = new FormControl();
  public variables = [
    {
      "id": "Covid Forum"
    },
    {
      "id": "Diabetes Forum"
    }
    , {
      "id": " My Forums"
    }


  ];

  public variables2 = [
    {
      "id": "fever"
    },
    {
      "id": "cold"
    }
    , {
      "id": " flu"
    }, {
      "id": "Diabetes"
    }
    , {
      "id": " Depression."
    }, {
      "id": "Anxiety"
    }, {
      "id": "Hemorrhoid"
    }, {
      "id": "Yeast infection"
    }, {
      "id": "Lupus"
    }

  ];

  constructor() {
    this.searchText.valueChanges.pipe(debounceTime(300)).subscribe(val => {
      this.searchTextMsg.emit(val);
      //  this.connectservice.textSend(val);
    })
  }

  ngOnInit(): void {
    console.log("HI", this.searchText)
  }


}
