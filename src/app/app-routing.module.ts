import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./news-bulletin/news-bulletin.module').then(
        (newsModule) => newsModule.NewsBulletinModule
      )
  },
  {
    path: 'auth',
    loadChildren: () => 
      import('./auth/auth.module').then(
        (authModule) => (authModule.AuthModule)
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
