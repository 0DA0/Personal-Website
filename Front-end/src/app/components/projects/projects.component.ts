import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      id: 1,
      title: 'Proje 1',
      description: 'Proje açıklaması buraya gelecek',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      link: '#',
      github: 'https://github.com'
    },
    {
      id: 2,
      title: 'Proje 2',
      description: 'Proje açıklaması buraya gelecek',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      link: '#',
      github: 'https://github.com'
    },
    {
      id: 3,
      title: 'Proje 3',
      description: 'Proje açıklaması buraya gelecek',
      technologies: ['React', 'JavaScript', 'Tailwind'],
      link: '#',
      github: 'https://github.com'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}