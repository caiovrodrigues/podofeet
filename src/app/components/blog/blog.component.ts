import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { DatePipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, DatePipe, NgOptimizedImage],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

  private blogService = inject(BlogService);

  posts = this.blogService.allPosts.sort((a,b) => {
    return b.data.getTime() - a.data.getTime();
  });

}
