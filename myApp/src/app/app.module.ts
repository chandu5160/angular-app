import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {AppRoutingModule} from './app.routing';

import {DashboardModule} from './dashboard/dashboard.module';
import {AdmindashboardModule} from './admindashboard/admindashboard.module';

import { ValidationsService} from './services/validations.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginformComponent,
    RegistrationformComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule,
    AdmindashboardModule
  ],
  providers: [ValidationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
