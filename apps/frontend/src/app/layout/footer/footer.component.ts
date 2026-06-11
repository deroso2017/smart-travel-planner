import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, RouterLink],
})
export class FooterComponent {
  year = new Date().getFullYear();
}
