import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../login-service';


@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit( customerLoginForm: NgForm ){
    /*
     here take from customerLoginForm
     to the acual form that u will
     pass to doPost method
    */
    console.log(customerLoginForm)
    console.log(customerLoginForm.value.userName, "---", customerLoginForm.value.password,"---", customerLoginForm.value.msidn)
   // this.loginService.doPost(customerLoginForm, "");
  }


}
