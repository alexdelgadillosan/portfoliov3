import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private elementRef: ElementRef) {}

  collapseNavbar() {
    const navbar = this.elementRef.nativeElement.querySelector('.navbar-collapse');
    navbar.classList.remove('show');
  }

  scrollToContact() {
    const contactSection = document.getElementById('contact')!;
    contactSection.scrollIntoView({behavior: 'smooth'});
    return false;
  }

  scrollToAbout() {
    const contactSection = document.getElementById('about')!;
    contactSection.scrollIntoView({behavior: 'smooth'});
    return false;
  }

  scrollToProjects() {
    const contactSection = document.getElementById('projects')!;
    contactSection.scrollIntoView({behavior: 'smooth'});
    return false;
  }
}
