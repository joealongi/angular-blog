import { Routes } from '@angular/router';

// pages
import { Home } from './components/home/home';
import { Blog } from './components/blog/blog';

// blogs
import { BlogTitle } from './blogs/blog-title/blog-title';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'blog', component: Blog },
  {
    path: 'blog/blog-title',
    component: BlogTitle,
  },
  {
    path: 'blogs',
    redirectTo: 'blog',
    pathMatch: 'full',
  },
];
