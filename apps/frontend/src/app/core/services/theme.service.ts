import { inject, Injectable, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private darkMode = signal(false);
  private router = inject(Router);

  toggleTheme() {
    this.darkMode.update((v) => !v);
    document.documentElement.setAttribute(
      'data-theme',
      this.darkMode() ? 'dark' : 'light',
    );
  }

  isDark() {
    return this.darkMode;
  }

  showLayout = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e: NavigationEnd) => {
        const url = e.urlAfterRedirects;
        return url !== '/' && !url.startsWith('/auth');
      }),
    ),
    { initialValue: false },
  );
}
