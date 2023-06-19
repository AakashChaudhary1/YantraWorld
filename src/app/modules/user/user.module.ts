import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { AccountComponent } from './account/account.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { Authguard } from 'src/app/services/authGuard';
import { LoginNewComponent } from 'src/app/login-new/login-new.component';
import { ForgotpasswordComponent } from 'src/app/forgotpassword/forgotpassword.component';


@NgModule({
  declarations: [
    LoginNewComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    ContactusComponent,
    ForgotpasswordComponent
  ],
  imports: [
    UserRoutingModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [Authguard]
})
export class UserModule { }
