import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {
  typedText = '';
  fullText = 'Full Stack Developer';
  typingSpeed = 100;

  constructor(private router: Router) {}

  ngOnInit() {
    this.typeText();
  }

  typeText() {
    let index = 0;
    const type = () => {
      if (index < this.fullText.length) {
        this.typedText += this.fullText.charAt(index);
        index++;
        setTimeout(type, this.typingSpeed);
      }
    };
    type();
  }

  navigateToProjects() {
    this.router.navigate(['/projects']);
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}