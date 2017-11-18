import { DatawargaComponent } from './datawarga/datawarga.component';
import { DatarwComponent } from './datarw/datarw.component';
import { DatartComponent } from './datart/datart.component';
import { DatakelurahanComponent } from './datakelurahan/datakelurahan.component';
import { DatakecamatanComponent } from './datakecamatan/datakecamatan.component';
import { DatakotaComponent } from './datakota/datakota.component';
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
    },
    {
      path: 'datakota',
      component: DatakotaComponent,
    },
    {
      path: 'datakecamatan',
      component: DatakecamatanComponent,
    },
    {
      path: 'datakelurahan',
      component: DatakelurahanComponent,
    },
    {
      path: 'datart',
      component: DatartComponent,
    },
    {
      path: 'datarw',
      component: DatarwComponent,
    },
    {
      path: 'datawarga',
      component: DatawargaComponent,
    }
  ];
  export const appRouterModule = RouterModule.forRoot(routes);
  