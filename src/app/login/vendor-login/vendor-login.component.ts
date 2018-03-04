import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.css']
})
export class VendorLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit( vendorLoginForm: NgForm ){
    /*
     here take from customerLoginForm
     to the acual form that u will
     pass to doPost method
    */
    console.log(vendorLoginForm)
    console.log(vendorLoginForm.value.userName, "---", vendorLoginForm.value.password,"---", vendorLoginForm.value.msidn)
    // this.loginService.doPost(customerLoginForm, "");
  }

}
