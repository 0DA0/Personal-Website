import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule]
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  loading = false;
  successMessage = '';
  errorMessage = '';

  private apiUrl = 'http://localhost:3000/api';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    if (this.contactForm.valid) {
      this.loading = true;

      const formData = this.contactForm.value;

      this.http.post(`${this.apiUrl}/contact`, formData)
        .subscribe({
          next: (response: any) => {
            this.loading = false;
            this.successMessage = response.message || 'Mesajınız başarıyla gönderildi!';
            this.contactForm.reset();
            this.submitted = false;

            // 5 saniye sonra başarı mesajını gizle
            setTimeout(() => {
              this.successMessage = '';
            }, 5000);

            console.log('✅ Başarılı:', response);
          },
          error: (error) => {
            this.loading = false;
            this.errorMessage = error.error?.message || 'Mesaj gönderilirken hata oluştu. Lütfen tekrar deneyin.';
            console.error('❌ Hata:', error);
          }
        });
    } else {
      this.errorMessage = 'Lütfen tüm alanları doğru şekilde doldurunuz.';
    }
  }

  // Email validasyon mesajı
  getEmailError() {
    const emailControl = this.f['email'];
    if (emailControl?.hasError('required')) {
      return 'E-posta adresi gerekli';
    }
    if (emailControl?.hasError('email')) {
      return 'Geçerli bir e-posta adresi giriniz';
    }
    return '';
  }

  // İsim validasyon mesajı
  getNameError() {
    const nameControl = this.f['name'];
    if (nameControl?.hasError('required')) {
      return 'Ad Soyad gerekli';
    }
    if (nameControl?.hasError('minlength')) {
      return 'Ad Soyad en az 2 karakter olmalı';
    }
    return '';
  }

  // Mesaj validasyon mesajı
  getMessageError() {
    const messageControl = this.f['message'];
    if (messageControl?.hasError('required')) {
      return 'Mesaj gerekli';
    }
    if (messageControl?.hasError('minlength')) {
      return 'Mesaj en az 10 karakter olmalı';
    }
    return '';
  }
}