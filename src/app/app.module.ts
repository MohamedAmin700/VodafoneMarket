import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VendorLoginComponent } from './login/vendor-login/vendor-login.component';
import { CustomerLoginComponent } from './login/customer-login/customer-login.component';
import { LoginRoleComponent } from './login/login-role/login-role.component';
import {LoginHeaderComponent} from './login/login-header/login-header.component';
import {CustomerRegisterComponent} from './login/customer-register/customer-register.component';
import {VendorRegisterComponent} from './login/vendor-register/vendor-register.component';
import {AuthGuard} from './login/auth.guard';
import {AppRoutingModule} from './app.routing';
import {LoginService} from './login/login-service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {LoginModule} from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VendorLoginComponent,
    CustomerLoginComponent,
    LoginRoleComponent,
    LoginHeaderComponent,
    CustomerRegisterComponent,
    VendorRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule

    //LoginModule
   // RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard,
              LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
