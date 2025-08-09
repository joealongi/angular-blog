import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideMarkdown } from 'ngx-markdown';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  providers: [provideMarkdown()],
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('heyitsjoealongi');
}
