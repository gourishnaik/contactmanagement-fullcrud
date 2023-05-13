import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './component/contact-list/contact-list.component';
import { AddContactComponent } from './component/add-contact/add-contact.component';
import {HttpClientModule} from '@angular/common/http';
import { UpdateContactComponent } from './component/update-contact/update-contact.component';
import { FormsModule } from '@angular/forms';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { ServerErrorComponent } from './component/server-error/server-error.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    AddContactComponent,
    UpdateContactComponent,
    LoginSignupComponent,
    PagenotfoundComponent,
    ServerErrorComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
