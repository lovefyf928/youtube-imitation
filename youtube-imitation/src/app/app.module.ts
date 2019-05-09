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
import { SettingComponent } from './youtube/setting/setting.component';
import { AccountComponent } from './youtube/setting/account/account.component';
import { ChangeInformationComponent } from './login/change-information/change-information.component';
import { IndexComponent } from './youtube/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EnterEmailComponent,
    EnterPwdComponent,
    RegisterComponent,
    YoutubeComponent,
    SettingComponent,
    AccountComponent,
    ChangeInformationComponent,
    IndexComponent
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
