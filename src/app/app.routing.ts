import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './core/components/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'orders', loadChildren: 'app/order/order.module#OrderModule'},
  {path: 'users', loadChildren: 'app/user/user.module#UserModule'},
  {path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}


