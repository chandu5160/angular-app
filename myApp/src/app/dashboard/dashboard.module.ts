import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ProductslistpageComponent } from './productslistpage/productslistpage.component';
import {DashboardRoutingModule} from './dashboard.routing';

@NgModule({
  declarations: [DashboardComponent, MenubarComponent, ProductslistpageComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
