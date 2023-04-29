import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './component/contact-list/contact-list.component';
import { AddContactComponent } from './component/add-contact/add-contact.component';
import { UpdateContactComponent } from './component/update-contact/update-contact.component';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import { AuthGuard } from './shared/auth.guard';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';




const routes: Routes = [
  {path:'contactlist',component:ContactListComponent,canActivate:[AuthGuard]},
  {path:'addcontact',component:AddContactComponent,canActivate:[AuthGuard]},
  {path:'updatecontact/:id',component:UpdateContactComponent,canActivate:[AuthGuard]},
  {path:'login-signup',component:LoginSignupComponent},
  {path:'',redirectTo:'login-signup',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
