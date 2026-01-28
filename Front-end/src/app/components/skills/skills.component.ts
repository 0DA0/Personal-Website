import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      category: 'Frontend',
      items: ['Angular', 'React', 'TypeScript', 'HTML/CSS', 'RxJS']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST API']
    },
    {
      category: 'Tools & Diğer',
      items: ['Git', 'Docker', 'Webpack', 'Jest', 'VS Code']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}