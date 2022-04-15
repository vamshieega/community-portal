import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export type ToasterType = 'success' | 'error' | 'warning' | 'info';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private duration = 2000;
  private toasterConfig = {
    closeButton: false,
    timeOut: this.duration,
    // easing: 'ease-in ease-out',
    // positionClass : 'toast-top-center',
    // disableTimeOut: true
  };
  constructor(public toasterService: ToastrService) { }
  async presentToast(message, title, type: ToasterType) {
    this.toasterService[type](message, '', this.toasterConfig);
  }
}
