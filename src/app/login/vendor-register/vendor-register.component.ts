import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-vendor-register',
  templateUrl: './vendor-register.component.html',
  styleUrls: ['./vendor-register.component.css']
})
export class VendorRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  onSubmit( vendorRegistrationForm: NgForm ){
    /*
     here take from customerLoginForm
     to the acual form that u will
     pass to doPost method
    */
    console.log(vendorRegistrationForm);
    console.log(vendorRegistrationForm.value.userName, "---", vendorRegistrationForm.value.password,"---", vendorRegistrationForm.value.msidn)
    // this.loginService.doPost(customerLoginForm, "");
  }

}
