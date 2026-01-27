import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  success = false;
  error = '';

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      this.apiService.sendContactMessage(this.contactForm.value).subscribe({
        next: () => {
          this.success = true;
          this.contactForm.reset();
          setTimeout(() => this.success = false, 5000);
        },
        error: (err) => {
          this.error = 'Mesaj gönderilemedi. Lütfen tekrar deneyin.';
          setTimeout(() => this.error = '', 5000);
        }
      });
    }
  }
}