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
import { RegisterComponent } from './login/register/register.component';
import { YoutubeComponent } from './youtube/youtube.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EnterEmailComponent,
    EnterPwdComponent,
    RegisterComponent,
    YoutubeComponent
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
