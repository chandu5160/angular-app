import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdmindashboardComponent} from './admindashboard/admindashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
    {
        path:'',
       component:DashboardComponent,
       loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) 
      
    },
    {
        path:'admin',
        component:AdmindashboardComponent ,
        loadChildren: () => import('./admindashboard/admindashboard.module').then(m => m.AdmindashboardModule) 

    },
    {
        path:'**',
        component:PagenotfoundComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule{}

