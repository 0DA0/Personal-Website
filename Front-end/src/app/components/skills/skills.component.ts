// Skills Component
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any = {};
  loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getSkills().subscribe({
      next: (response) => {
        this.skills = response.data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading skills:', error);
        this.loading = false;
      }
    });
  }

  getSkillKeys() {
    return Object.keys(this.skills);
  }
}