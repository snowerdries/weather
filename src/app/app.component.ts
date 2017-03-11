import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Weer {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }
