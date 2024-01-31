import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ShortenurlComponent } from './components/shortenurl/shortenurl.component';
import { HomeComponent } from './components/home/home.component';
import { ViewurlsComponent } from './components/home/viewurls/viewurls.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    ShortenurlComponent,
    HomeComponent,
    ViewurlsComponent,
    SidebarComponent,
    LandingpageComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
