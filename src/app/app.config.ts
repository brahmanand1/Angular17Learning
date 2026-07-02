import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { counterReducer } from './store/counter.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoReducer } from './store/todo/todo.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideStore({ counter: counterReducer, todo : todoReducer }),   // 👈 Register reducer
    provideEffects([]),                          // 👈 Add effects here later
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
  
};
