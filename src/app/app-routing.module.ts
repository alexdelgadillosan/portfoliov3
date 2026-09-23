import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PortfoliopageComponent } from './portfoliopage/portfoliopage.component';
import { ProjectsOnlyComponent } from './projects-only/projects-only.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'portfolio', component: PortfoliopageComponent },
  { path: 'projects', component: ProjectsOnlyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
