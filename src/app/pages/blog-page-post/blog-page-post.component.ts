import { ViewportScroller } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';

interface Post{
  id: number;
  title: string;
  descricaoTitle: string;
  blocos: {
    title: string;
    descricao: string;
    lista?: Bloco[]
  }[]
}

interface Bloco{
  title: string;
  descricao: string;
}

@Component({
  selector: 'app-blog-page-post',
  standalone: true,
  imports: [],
  templateUrl: './blog-page-post.component.html',
  styleUrl: './blog-page-post.component.scss'
})
export class BlogPagePostComponent implements OnInit{
  
  private viewportScroll = inject(ViewportScroller);
  private route = inject(ActivatedRoute);
  blogService = inject(BlogService);
  post?: Post;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);

    this.post = this.blogService.allPosts.find(post => post.id == id);

    this.viewportScroll.scrollToPosition([0,0]);
  }

}
