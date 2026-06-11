import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  // router.createUrlTree(['/']): Cancel current navigation and redirect to /
  return auth.isLoggedIn() ? true : router.createUrlTree(['/']);
};
