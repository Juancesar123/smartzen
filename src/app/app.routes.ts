import { DataprovinsiComponent } from './dataprovinsi/dataprovinsi.component';
import { HomedashboardComponent } from './homedashboard/homedashboard.component';
import { UsersComponent } from './users/users.component';

import { Routes,RouterModule  } from '@angular/router';

const routes: Routes = [
    // map '/persons' to the people list component
    {
      path: 'home',
      component: HomedashboardComponent,
    },
    // map '/' to '/persons' as our default route
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
        path: 'users',
        component: UsersComponent,
    },
    {
      path: 'dataprovinsi',
      component: DataprovinsiComponent,
  }
  ];
  export const appRouterModule = RouterModule.forRoot(routes);
  