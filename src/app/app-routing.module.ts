import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DonateComponent }   from './donate/donate.component';
import { SignUpComponent }      from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: 'dashboard', component: DashboardComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'sign-up', component: SignUpComponent },
    { path: 'components', component: ComponentsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}