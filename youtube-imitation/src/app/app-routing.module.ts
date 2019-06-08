import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {EnterEmailComponent} from "./login/enter-email/enter-email.component";
import {EnterPwdComponent} from "./login/enter-pwd/enter-pwd.component";
import {RegisterComponent} from "./login/register/register.component";
import {YoutubeComponent} from "./youtube/youtube.component";
import {SettingComponent} from "./youtube/setting/setting.component";
import {AccountComponent} from "./youtube/setting/account/account.component";
import {ChangeInformationComponent} from "./login/change-information/change-information.component";
import {IndexComponent} from "./youtube/index/index.component";
import {MainComponent} from "./youtube/index/main/main.component";
import {UpLoadVideoComponent} from "./youtube/up-load-video/up-load-video.component";

const routes: Routes = [
  {path: "login", component: LoginComponent, children: [
      {
        path: "", component: EnterEmailComponent
      },
      {
        path: "enterpwd", component: EnterPwdComponent
      },
      {
        path: "register", component: RegisterComponent
      },
      {
        path: "changei", component: ChangeInformationComponent
      }
    ]
  },
  {
    path: "", component: YoutubeComponent, children: [
      {
        path: "setting", component: SettingComponent, children: [
          {
            path: "account", component: AccountComponent
          }
        ]
      },
      {
        path: "", component: IndexComponent, children: [
          {
            path: "", component: MainComponent
          }
        ]
      },
      {
        path: "uploadvideo", component: UpLoadVideoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
