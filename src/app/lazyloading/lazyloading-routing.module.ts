import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from '../component/login-signup/login-signup.component';


const routes: Routes = [
 
  {path:'loginpage',component:LoginSignupComponent},
  {path:'',redirectTo:'loginpage',pathMatch:'full'}, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }
