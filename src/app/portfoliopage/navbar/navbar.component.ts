import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    private elementRef: ElementRef,
    private router: Router
  ) {}

  collapseNavbar() {
    const navbar =
      this.elementRef.nativeElement.querySelector('.navbar-collapse');
    navbar?.classList.remove('show');
  }

  private isOnPortfolio(): boolean {
    return this.router.url.split('?')[0].split('#')[0] === '/portfolio';
  }

  private scrollToId(id: string) {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  }

  private goPortfolioThenScroll(id: string) {
    if (this.isOnPortfolio()) {
      this.scrollToId(id);
      return;
    }
    this.router.navigate(['/portfolio']).then(() => {
      setTimeout(() => this.scrollToId(id), 50);
    });
  }

  scrollToAbout() {
    this.goPortfolioThenScroll('about');
    return false;
  }

  scrollToProjects() {
    // On /portfolio: scroll to #projects. Never navigate to /projects (URL-only page).
    if (this.isOnPortfolio()) {
      this.scrollToId('projects');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return false;
  }

  scrollToContact() {
    this.goPortfolioThenScroll('contact');
    return false;
  }
}
