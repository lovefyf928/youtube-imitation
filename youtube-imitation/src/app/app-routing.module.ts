import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {EnterEmailComponent} from "./login/enter-email/enter-email.component";
import {EnterPwdComponent} from "./login/enter-pwd/enter-pwd.component";

const routes: Routes = [
  {path: "login", component: LoginComponent, children: [
      {
        path: "enteremail", component: EnterEmailComponent
      },
      {
        path: "enterpwd", component: EnterPwdComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
