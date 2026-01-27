import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutInfo: any = {};
  loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAboutInfo().subscribe({
      next: (response) => {
        this.aboutInfo = response.data;
        this.loading = false;
      },
      error: (error) => { console.error('Error:', error); this.loading = false; }
    });
  }
}