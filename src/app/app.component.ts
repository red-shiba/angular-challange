import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // RouterModule importieren
  template: `
    <header>
      <h1>Instagram Clone</h1>
      <nav>
        <a routerLink="/" routerLinkActive="active" ariaCurrentWhenActive="page">Main Page</a>
        <a routerLink="/contact" routerLinkActive="active" ariaCurrentWhenActive="page">Contact</a>
      </nav>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
