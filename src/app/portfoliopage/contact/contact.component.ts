import { Component, OnInit } from '@angular/core';
import * as countapi from 'countapi-js';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  visitCount: number = 0;

  ngOnInit() {
    const namespace = 'alexdelgadillo';
    const key = 'visit_counteralex';

    // Primero obtenemos el conteo actual y lo mostramos
    countapi.get(namespace, key).then((result: { value: number }) => {
      this.visitCount = result.value;

      // Luego incrementamos el conteo en el servidor
      countapi.hit(namespace, key).then((newResult: { value: number }) => {
        this.visitCount = newResult.value;
      });
    });
  }
}
