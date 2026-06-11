import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, ApolloLink } from '@apollo/client/core';
import { inject } from '@angular/core';

const TOKEN_KEY = 'access_token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    provideApollo(() => {
      const httpLink = inject(HttpLink);
      const authLink = new ApolloLink((operation, forward) => {
        const token = localStorage.getItem(TOKEN_KEY);

        operation.setContext({
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });

        return forward(operation);
      });

      return {
        cache: new InMemoryCache(),
        link: ApolloLink.from([
          authLink,
          httpLink.create({ uri: 'http://localhost:3000/graphql' }),
        ]),
      };
    }),
  ],
};
