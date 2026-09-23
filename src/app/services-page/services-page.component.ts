import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  getProjects,
  PAGE_COPY,
  ProjectItem,
  ServiceItem,
  ServicesLang,
  SERVICES,
  ServicesPageCopy,
} from './services.content';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css'],
})
export class ServicesPageComponent implements OnInit, OnDestroy {
  lang: ServicesLang = 'en';
  copy: ServicesPageCopy = PAGE_COPY.en;
  services: ServiceItem[] = SERVICES.en;
  projects: ProjectItem[] = getProjects('en');

  private sub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.sub = this.route.data.subscribe((data) => {
      const lang = (data['lang'] as ServicesLang) || 'en';
      this.applyLang(lang);
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  switchLang(lang: ServicesLang) {
    if (lang === this.lang) {
      return;
    }
    const hash = window.location.hash || '';
    this.router.navigate([`/services-${lang}`]).then(() => {
      if (hash) {
        setTimeout(() => {
          const id = hash.replace('#', '');
          document.getElementById(id)?.scrollIntoView();
        }, 50);
      }
    });
  }

  goContact(event: Event) {
    event.preventDefault();
    this.router.navigate(['/portfolio']).then(() => {
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({
          behavior: 'smooth',
        });
      }, 50);
    });
  }

  private applyLang(lang: ServicesLang) {
    this.lang = lang;
    this.copy = PAGE_COPY[lang];
    this.services = SERVICES[lang];
    this.projects = getProjects(lang);
  }
}
