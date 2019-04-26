import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {EnterEmailComponent} from "./login/enter-email/enter-email.component";
import {EnterPwdComponent} from "./login/enter-pwd/enter-pwd.component";
import {RegisterComponent} from "./login/register/register.component";
import {YoutubeComponent} from "./youtube/youtube.component";
import {SettingComponent} from "./youtube/setting/setting.component";
import {AccountComponent} from "./youtube/setting/account/account.component";

const routes: Routes = [
  {path: "", component: LoginComponent, children: [
      {
        path: "", component: EnterEmailComponent
      },
      {
        path: "enterpwd", component: EnterPwdComponent
      },
      {
        path: "register", component: RegisterComponent
      }
    ]
  },
  {
    path: "youtube", component: YoutubeComponent, children: [
      {
        path: "setting", component: SettingComponent, children: [
          {
            path: "account", component: AccountComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
