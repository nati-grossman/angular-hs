import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
    pathMatch: 'full',
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./components/form/form.component').then((m) => m.FormComponent),
  },
  {
    path: 'data-table',
    loadComponent: () =>
      import('./components/data-table/data-table.component').then(
        (m) => m.DataTableComponent
      ),
  },
  {
    path: 'popup-demo',
    loadComponent: () =>
      import('./components/popup-demo/popup-demo.component').then(
        (m) => m.PopupDemoComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
