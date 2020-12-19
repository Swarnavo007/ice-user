import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingComponent } from './components/shopping/shopping.component';


@NgModule({
  declarations: [UserComponent, FooterComponent, HeaderComponent, HomeComponent, ShoppingComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
