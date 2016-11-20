import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { LoginComponent } from './login.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full',
  },
  {
    path: 'heroes',
    children: [
      {
        path: '',
        component: HeroesComponent,
        data: {
          title: 'All heroes',
          root: true
        }
      },
      {
        path: ':id',
        component: HeroDetailComponent,
        data: {
          title: 'Hero detail'
        }
      }
    ]
  }
  ,{
    path: 'login',
    children: [
      {
        path: '',
        component: LoginComponent,
        data: {
          title: 'Login',
          root: true
        }
      }
    ]
  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
