import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ThemeService } from './core/services/theme.service';

@Component({
  imports: [NavbarComponent, RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class App {
  protected title = 'frontend';
  theme = inject(ThemeService);
}
