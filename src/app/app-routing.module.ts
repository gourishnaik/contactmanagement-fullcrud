import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './component/contact-list/contact-list.component';
import { AddContactComponent } from './component/add-contact/add-contact.component';
import { UpdateContactComponent } from './component/update-contact/update-contact.component';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import { AuthGuard } from './shared/auth.guard';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { ServerErrorComponent } from './component/server-error/server-error.component';
import { AdminloginSignupComponent } from './component/adminlogin-signup/adminlogin-signup.component';
import { AdminviewComponent } from './component/adminview/adminview.component';
import { AdminauthGuard } from './adminauth.guard';




const routes: Routes = [
  {path:'contactlist',component:ContactListComponent,canActivate:[AuthGuard]},
  {path:'addcontact',component:AddContactComponent,canActivate:[AuthGuard]},
  {path:'updatecontact/:id',component:UpdateContactComponent,canActivate:[AuthGuard]},
  {path:'server-error',component:ServerErrorComponent},
  {path:'adminlogin-signup',component:AdminloginSignupComponent},
  {path:'admin-view',component:AdminviewComponent,canActivate:[AdminauthGuard]},
  {path:'login-signup',loadChildren:()=>import('./lazyloading/lazyloading.module').then(res=>res.LazyloadingModule)},
  {path:'',redirectTo:'login-signup',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
