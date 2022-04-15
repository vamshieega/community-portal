import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectComponent } from './connect.component';
import { ConnectHeaderComponent } from './components/connect-header/connect-header.component';
import { ConnectMainComponent } from './components/connect-main/connect-main.component';



@NgModule({
  declarations: [
    ConnectComponent,
    ConnectHeaderComponent,
    ConnectMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConnectModule { }
