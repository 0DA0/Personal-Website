import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AboutComponent implements OnInit {
  loading = false;
  
  aboutInfo = {
    name: 'Doğukan',
    bio: 'Full Stack Web Developer olarak Angular, Node.js, Python ve modern web teknolojileriyle ölçeklenebilir web uygulamaları geliştiriyorum. Clean code, performans ve güvenlik odaklı çalışıyorum.',
    github: 'https://github.com/0DA0',
    linkedin: 'https://www.linkedin.com/in/doğukan-aras-424184340/'
  };

  constructor() { }

  ngOnInit(): void {
  }
}