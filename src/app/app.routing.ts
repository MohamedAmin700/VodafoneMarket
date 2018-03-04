import {RouterModule, Routes} from '@angular/router';
import {VendorRegisterComponent} from './login/vendor-register/vendor-register.component';
import {LoginRoleComponent} from './login/login-role/login-role.component';
import {CustomerRegisterComponent} from './login/customer-register/customer-register.component';
import {CustomerLoginComponent} from './login/customer-login/customer-login.component';
import {VendorLoginComponent} from './login/vendor-login/vendor-login.component';
import {NgModule} from '@angular/core';

export const appRoutes: Routes = [
  {path:"", component:LoginRoleComponent, data: {depth: 1}},
  {path:"customerLogin", component:CustomerLoginComponent, data:{depth: 2}},
  {path:"vendorLogin", component:VendorLoginComponent, data:{depth:3}},
  {path:"customerRegistration", component:CustomerRegisterComponent},
  {path:"vendorRegistration", component:VendorRegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}

