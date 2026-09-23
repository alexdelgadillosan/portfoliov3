import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PortfoliopageComponent } from './portfoliopage/portfoliopage.component';
import { ServicesPageComponent } from './services-page/services-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'portfolio', component: PortfoliopageComponent },
  {
    path: 'services-en',
    component: ServicesPageComponent,
    data: { lang: 'en' },
  },
  {
    path: 'services-es',
    component: ServicesPageComponent,
    data: { lang: 'es' },
  },
  { path: 'services', redirectTo: 'services-en', pathMatch: 'full' },
  { path: 'projects', redirectTo: 'services-en', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
