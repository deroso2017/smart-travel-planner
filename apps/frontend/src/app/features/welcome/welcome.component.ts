import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {
  features = [
    {
      icon: 'map',
      title: 'Plan Trips',
      desc: 'Organize all your travel plans in one dashboard.',
    },
    {
      icon: 'event',
      title: 'Track Dates',
      desc: 'Never miss a departure with smart date tracking.',
    },
    {
      icon: 'explore',
      title: 'Explore Destinations',
      desc: 'Discover and save your dream destinations.',
    },
  ];
}
