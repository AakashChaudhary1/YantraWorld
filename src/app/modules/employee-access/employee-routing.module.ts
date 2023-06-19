import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Authguard } from 'src/app/services/authGuard';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderByAdminComponent } from './orders-history-by-admin/order-by-admin.component';
import { ProductInsertComponent } from './product-insert/product-insert.component';
// import { UserManagementComponent } from './user-managements/user-management.component';

// import { OrderByUserComponent } from './orders-history-by-user/order-by-user.component';
// import { OrderDetailComponent } from './orders-history-by-user/order-detail/order-detail.component';

const routes: Routes = [
  // { path: 'history', component: OrderByUserComponent},
  {
    path: 'saleman',
    canActivate: [Authguard],
    loadChildren: () =>
      import('./modules/saleman/saleman.module').then(m => m.salemanModule)
  },

  {
    path: 'management', canActivate:[Authguard], loadChildren: () =>
      import ( './user-management/user-management.module' ).then(m => m.UserManagementModule)
  },

  { path: 'all', canActivate: [Authguard], component: OrderByAdminComponent},
  { path: 'order-detail/:id',  canActivate: [Authguard],component: OrderDetailComponent},
  { path: 'product-insert',  canActivate: [Authguard],component: ProductInsertComponent},
  // { path: 'user-manage', canActivate: [Authguard], component: UserManagementComponent,},
  { path: '**', redirectTo: 'all' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
