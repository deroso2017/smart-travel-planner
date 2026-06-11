import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { AuthService } from '../../core/services/auth.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,

    RouterLink,
    RouterLinkActive,
  ],
})
export class NavbarComponent {
  @Input() drawer!: MatSidenav;

  theme = inject(ThemeService);
  auth = inject(AuthService);
}
