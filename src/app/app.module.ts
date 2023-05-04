import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PortfoliopageComponent } from './portfoliopage/portfoliopage.component';
import { NavbarComponent } from './portfoliopage/navbar/navbar.component';
import { AboutComponent } from './portfoliopage/about/about.component';
import { ContactComponent } from './portfoliopage/contact/contact.component';
import { ProjectspageComponent } from './portfoliopage/projectspage/projectspage.component';
import { ProjectviewComponent } from './portfoliopage/projectspage/projectview/projectview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PortfoliopageComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    ProjectspageComponent,
    ProjectviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
