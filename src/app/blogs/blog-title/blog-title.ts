import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-title',
  imports: [],
  templateUrl: './blog-title.html',
  styleUrl: './blog-title.css',
})
export class BlogTitle implements OnInit {
  constructor(
    private readonly meta: Meta,
    private readonly titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('blog title - blog - example');
    this.meta.updateTag({
      name: 'description',
      content: 'blog description',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://example.com/blog/blog-title/',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'blog title - blog - example',
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'blog description',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://example.com/blog-title.png',
    });
    this.meta.updateTag({
      property: 'twitter:url',
      content: 'https://example.com/blog/blog-title/',
    });
    this.meta.updateTag({
      property: 'twitter:title',
      content: 'blog title - blog - example',
    });
    this.meta.updateTag({
      property: 'twitter:description',
      content: 'blog description',
    });
    this.meta.updateTag({
      property: 'twitter:image',
      content: 'https://example.com/blog-title.png',
    });
  }
}
