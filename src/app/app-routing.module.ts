import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ViewurlsComponent } from './components/home/viewurls/viewurls.component';
import { authGuard } from './guard/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
  },
  {
    path: 'register',
    component: AuthenticationComponent,  
  },
  {
    path: 'login/:toggle',
    component: AuthenticationComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'home/viewurls',
    component: ViewurlsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'home/about',
    component: AboutComponent,
    canActivate: [authGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
