import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  @ViewChild('typewriter', { static: true }) typewriterElement!: ElementRef;
  @ViewChild('imgStart', { static: true }) myImageElement!: ElementRef;


  ngAfterViewInit() {
    const text = this.typewriterElement.nativeElement.innerText;
    let index = 0;
    let typedText = '';

    const type = () => {
      if (index < text.length) {
        typedText += text.charAt(index);
        this.typewriterElement.nativeElement.innerText = typedText;
        index++;
        setTimeout(type, 100);
      }
    };
  
    type();
    this.showImageAfterDelay();
  } 

  showImageAfterDelay() {
    setTimeout(() => {
      this.fadeInImage();
    }, 7000);
  }

  fadeInImage() {
    let opacity = 0;
    const interval = setInterval(() => {
      opacity += 0.1;
      this.myImageElement.nativeElement.style.opacity = opacity.toString();
      if (opacity >= 1) {
        clearInterval(interval);
      }
    }, 100);
  }

}
