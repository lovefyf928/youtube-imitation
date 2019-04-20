import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EnterEmailComponent } from './login/enter-email/enter-email.component';
import { EnterPwdComponent } from './login/enter-pwd/enter-pwd.component';

import { Server } from "./server";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EnterEmailComponent,
    EnterPwdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Server],
  bootstrap: [AppComponent]
})
export class AppModule { }
