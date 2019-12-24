import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {ProductslistpageComponent} from './productslistpage/productslistpage.component'

const routes: Routes = [
    {
        path:'',
       component:ProductslistpageComponent
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class DashboardRoutingModule{}