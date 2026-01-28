import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutInfo = {
    name: 'Adınız',
    bio: 'Yazınız',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'your-email@example.com'
  };

  constructor() { }

  ngOnInit(): void {
  }
}