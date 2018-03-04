import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit( customerRegistrationForm: NgForm ){
    /*
     here take from customerLoginForm
     to the acual form that u will
     pass to doPost method
    */
    console.log(customerRegistrationForm);
    console.log(customerRegistrationForm.value.userName, "---", customerRegistrationForm.value.password,"---", customerRegistrationForm.value.msidn)
    // this.loginService.doPost(customerLoginForm, "");
  }

}
