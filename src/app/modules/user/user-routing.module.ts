import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotpasswordComponent } from 'src/app/forgotpassword/forgotpassword.component';
import { LoginNewComponent } from 'src/app/login-new/login-new.component';
import { Authguard } from 'src/app/services/authGuard';
import { AccountComponent } from './account/account.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // App Routes goes here
  { path: 'my-account', canActivate: [Authguard], component: AccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginnew', component: LoginNewComponent },
  { path: 'Forgotpassword', component: ForgotpasswordComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'contact', canActivate: [Authguard], component: ContactusComponent },

  // otherwise redirect to root of this module
  { path: '**', redirectTo: 'login' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
