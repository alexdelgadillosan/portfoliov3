import { Component, OnInit } from '@angular/core';

const PROFILE_IMAGE = 'assets/pictures/profile.webp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  ngOnInit(): void {
    const img = new Image();
    img.src = PROFILE_IMAGE;
  }
}
