import { Routes } from '@angular/router';

export const parentRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./parent.component').then(m => m.ParentComponent),
    children: [
      {
        path: 'child',
        loadComponent: () => import('../child/child.component').then(m => m.ChildComponent),
      }
    ]
  }
];
