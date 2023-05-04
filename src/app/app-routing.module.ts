import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PortfoliopageComponent } from './portfoliopage/portfoliopage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'portfolio', component: PortfoliopageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
