import { Component } from '@angular/core';
import { PROJECTS, ProjectItem } from './projects.data';

@Component({
  selector: 'app-projects-only',
  templateUrl: './projects-only.component.html',
  styleUrls: ['./projects-only.component.css'],
})
export class ProjectsOnlyComponent {
  featured: ProjectItem[] = PROJECTS.filter((p) => p.featured);
  other: ProjectItem[] = PROJECTS.filter((p) => !p.featured);
}
