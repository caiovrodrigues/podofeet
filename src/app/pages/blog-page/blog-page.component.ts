import { Component, inject, OnInit } from '@angular/core';
import { BlogComponent } from '../../components/blog/blog.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [BlogComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss'
})
export class BlogPageComponent implements OnInit{
  
  private viewportScroll = inject(ViewportScroller);

  ngOnInit(): void {
    this.viewportScroll.scrollToPosition([0,0]);
  }
}
