import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './core/components/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'orders', loadChildren: () => import('app/order/order.module').then(m => m.OrderModule)},
  {path: 'users', loadChildren: () => import('app/user/user.module').then(m => m.UserModule)},
  {path: 'auth', loadChildren: () => import('app/auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}


