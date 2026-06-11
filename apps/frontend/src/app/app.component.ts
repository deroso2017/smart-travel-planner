import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ThemeService } from './core/services/theme.service';

@Component({
  imports: [LayoutComponent, CommonModule, RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class App {
  theme = inject(ThemeService);

  showLayout = this.theme.showLayout;
}
