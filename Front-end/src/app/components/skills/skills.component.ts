import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SkillsComponent implements OnInit {
  skillCategories: SkillCategory[] = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'Angular', level: 85, category: 'frontend' },
        { name: 'TypeScript', level: 80, category: 'frontend' },
        { name: 'HTML5 & CSS3', level: 90, category: 'frontend' },
        { name: 'JavaScript', level: 85, category: 'frontend' },
        { name: 'RxJS', level: 75, category: 'frontend' }
      ]
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 80, category: 'backend' },
        { name: 'Express.js', level: 85, category: 'backend' },
        { name: 'Python', level: 75, category: 'backend' },
        { name: 'RESTful API', level: 90, category: 'backend' },
        { name: 'PHP', level: 70, category: 'backend' }
      ]
    },
    {
      category: 'Database & Cloud',
      skills: [
        { name: 'MongoDB', level: 75, category: 'database' },
        { name: 'PostgreSQL', level: 70, category: 'database' },
        { name: 'MySQL', level: 75, category: 'database' },
        { name: 'Firebase', level: 65, category: 'database' }
      ]
    },
    {
      category: 'Machine Learning & Data Science',
      skills: [
        { name: 'TensorFlow', level: 70, category: 'ml' },
        { name: 'Deep Learning', level: 75, category: 'ml' },
        { name: 'CNN', level: 70, category: 'ml' },
        { name: 'Jupyter Notebook', level: 80, category: 'ml' }
      ]
    },
    {
      category: 'Tools & DevOps',
      skills: [
        { name: 'Git & GitHub', level: 90, category: 'tools' },
        { name: 'Docker', level: 65, category: 'tools' },
        { name: 'VS Code', level: 95, category: 'tools' },
        { name: 'Postman', level: 85, category: 'tools' },
        { name: 'CodeIgniter', level: 70, category: 'tools' }
      ]
    },
    {
      category: 'Mobile Development',
      skills: [
        { name: 'Android (Java)', level: 70, category: 'mobile' },
        { name: 'Mobile App Design', level: 65, category: 'mobile' }
      ]
    }
  ];

  githubProfile = 'https://github.com/0DA0';

  constructor() { }

  ngOnInit(): void {
  }

  getSkillBarWidth(level: number): string {
    return level + '%';
  }

  getSkillColor(level: number): string {
    if (level >= 80) return 'var(--neon-green)';
    if (level >= 60) return 'var(--accent-cyan)';
    return 'var(--accent-yellow)';
  }
}