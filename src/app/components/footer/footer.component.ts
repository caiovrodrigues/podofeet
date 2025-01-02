import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({opacity: '0', transform: 'translateY(-100%)'}),
        animate('400ms ease-in', style({opacity: '1', transform: 'translateY(0)'}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0)'}),
        animate('400ms ease-in', style({transform: 'translateX(100%)'}))
      ]),
      state('closed', style({transform: 'translateX(120%)'})),
      state('open', style({transform: 'translateX(0)'})),
      transition('closed <=> open', [animate('1s ease-in')])
    ])
  ]
})
export class FooterComponent implements OnInit{
  
  private emailService = inject(EmailService);
  private formBuilder = inject(FormBuilder);
  mailForm!: FormGroup;
  notificationOpen = false;

  ngOnInit(): void {
    this.mailForm = this.formBuilder.group({
      email: ['', [Validators.email]]
    });
  }

  get email(){
    return this.mailForm.get('email')!;
  }

  submitForm(){
    if(this.mailForm.invalid){
      this.notificationOpen = false;
      return;
    }
    let formData = new FormData();
    formData.append("email", this.mailForm.controls['email'].value);
    formData.append("message", "Olá, quero receber notícias sobre podologia!");
    this.emailService.newsletter(formData).subscribe({
      next: (data) => {
        this.notificationOpen = true;
      },
      error: (err) => {
        console.log("Houve algum erro.", err);
      }
    })
  }

}
