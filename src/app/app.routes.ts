import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'parent',
    loadChildren: () => import('./parent/parent.routes').then(m => m.parentRoutes)
  }
];
