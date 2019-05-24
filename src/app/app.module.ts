import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonateComponent } from './donate/donate.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsComponent } from './components/components.component';
@NgModule({
  declarations: [
    AppComponent,
	DonateComponent,
	SignUpComponent,
	DashboardComponent,
	ComponentsComponent,
  ],
  imports: [
    BrowserModule,	
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
