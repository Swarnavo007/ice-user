import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShoppingComponent } from './components/shopping/shopping.component';

import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  {path:'home',component:HomeComponent},
  {path:'shop',component:ShoppingComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
