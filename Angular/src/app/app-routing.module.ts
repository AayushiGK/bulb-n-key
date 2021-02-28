import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PullDetailsComponent } from './pull-photos/pull-details/pull-details.component';
import { PullPhotosComponent } from './pull-photos/pull-photos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pull-photos', pathMatch: 'full' },
  { path: 'pull-photos', component: PullPhotosComponent },
  { path: 'pull-photos/:id', component:PullDetailsComponent },
];

export const routing = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
  useHash: false
});
