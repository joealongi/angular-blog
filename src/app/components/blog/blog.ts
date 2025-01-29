import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog implements OnInit {
  constructor(
    private readonly meta: Meta,
    private readonly titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('blog - example');
    this.meta.updateTag({
      name: 'description',
      content: 'blog page description',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://example.com/blog/',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'blog - example',
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'blog page description',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://example.com/example.png',
    });
    this.meta.updateTag({
      property: 'twitter:url',
      content: 'https://example.com/blog/',
    });
    this.meta.updateTag({
      property: 'twitter:title',
      content: 'blog - example',
    });
    this.meta.updateTag({
      property: 'twitter:description',
      content: 'blog page description',
    });
    this.meta.updateTag({
      property: 'twitter:image',
      content: 'https://example.com/example.png',
    });
  }
}
