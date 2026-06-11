import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeService } from '../core/services/theme.service';

@Component({
  imports: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    MatSidenavModule,
    CommonModule,
  ],
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  theme = inject(ThemeService);

  showLayout = this.theme.showLayout;
}
