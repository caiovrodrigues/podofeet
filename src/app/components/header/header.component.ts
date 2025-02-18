import { animate, style, transition, trigger } from '@angular/animations';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease-in', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('400ms ease-in', style({opacity: 0}))
      ])
    ])
  ]
})
export class HeaderComponent{
  platformId = inject(PLATFORM_ID);
  menuOpen = false;
  sticky = false;

  ngOnInit(): void {
    if(this.platformId == 'browser'){
      window.addEventListener('scroll', () => {
        this.sticky = window.scrollY > 0;
      })
    }
  }

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }
}
