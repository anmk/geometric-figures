import { RouterModule, Routes } from '@angular/router';

const routesConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

export const routerModule = RouterModule.forRoot(routesConfig, {
  enableTracing: false,
  useHash: false
});
