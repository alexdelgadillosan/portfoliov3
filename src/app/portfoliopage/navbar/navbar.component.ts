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

  private path(): string {
    return this.router.url.split('?')[0].split('#')[0];
  }

  private isOnPortfolio(): boolean {
    return this.path() === '/portfolio';
  }

  private isOnServices(): boolean {
    return (
      this.path() === '/services-en' || this.path() === '/services-es'
    );
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
    if (this.isOnPortfolio() || this.isOnServices()) {
      this.scrollToId('projects');
    } else {
      this.goPortfolioThenScroll('projects');
    }
    return false;
  }

  scrollToContact() {
    this.goPortfolioThenScroll('contact');
    return false;
  }
}
