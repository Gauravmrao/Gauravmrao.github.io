import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    MatCardModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  text: string = "Hi, I'm Gaurav! Welcome to my website!";
  characterCount: number;

  constructor() {
    this.characterCount = this.text.length;
  }

}
