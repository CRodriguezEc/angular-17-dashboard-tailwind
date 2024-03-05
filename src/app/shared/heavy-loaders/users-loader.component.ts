import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hola Mundo - APP - USER - LOADER</h1>
  `
})

export class UsersLoaderComponent {
    constructor(){}
}
