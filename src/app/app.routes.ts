import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogPagePostComponent } from './pages/blog-page-post/blog-page-post.component';

export const routes: Routes = [
    { path: '', title: 'Podofeet', pathMatch: 'full', component: HomeComponent },
    { path: 'blog', title: 'Podofeet - Blog', component: BlogPageComponent },
    { path: 'blog/:id', title: 'Podofeet - Blog', component: BlogPagePostComponent },
    { path: '**', component: HomeComponent }
];
