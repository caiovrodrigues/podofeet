import { Component, inject, OnInit } from '@angular/core';
import { BlogComponent } from "../blog/blog.component";
import { DepoimentosComponent } from "../depoimentos/depoimentos.component";
import { FooterComponent } from "../footer/footer.component";
import { ServicosComponent } from "../servicos/servicos.component";
import { SobreNosComponent } from "../sobre-nos/sobre-nos.component";
import { ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GalleryComponent } from "../gallery/gallery.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ServicosComponent, DepoimentosComponent, FooterComponent, SobreNosComponent, BlogComponent, RouterLink, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private viewportScroll = inject(ViewportScroller);

  ngOnInit(): void {
    this.viewportScroll.scrollToPosition([0,0]);
  }
}
