import { Injectable, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { LOGIN_MUTATION, REGISTER_MUTATION } from '../graphql/auth.mutations';
import { tap } from 'rxjs';

const TOKEN_KEY = 'access_token';

/**
 * Authentication service responsible for:
 * - Login / Register via GraphQL
 * - Storing JWT token
 * - Tracking authentication state
 * - Logging out user
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private router = inject(Router);
  private apollo = inject(Apollo);

  private _token = signal<string | null>(localStorage.getItem(TOKEN_KEY));

  isLoggedIn = computed(() => !!this._token());
  token = this._token.asReadonly();

  login(email: string, password: string) {
    return this.apollo
      .mutate<{ login: { accessToken: string } }>({
        mutation: LOGIN_MUTATION,
        variables: { input: { email, password } },
      })
      .pipe(
        tap((result) => {
          const token = result.data?.login.accessToken;
          if (token) this.setToken(token);
        }),
      );
  }

  register(email: string, password: string) {
    return this.apollo
      .mutate<{ register: { accessToken: string } }>({
        mutation: REGISTER_MUTATION,
        variables: { input: { email, password } },
      })
      .pipe(
        tap((result) => {
          const token = result.data?.register.accessToken;
          if (token) this.setToken(token);
        }),
      );
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    this._token.set(null);
    this.apollo.client.clearStore();
    this.router.navigate(['/']);
  }

  private setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
    this._token.set(token);
  }
}
