import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projectview',
  templateUrl: './projectview.component.html',
  styleUrls: ['./projectview.component.css'],
})
export class ProjectviewComponent {
  @Input() imgSrc = '';
  @Input() title = '';
  @Input() description = '';
  @Input() shortDescription = '';
  @Input() linkUrl: string = '';
}
