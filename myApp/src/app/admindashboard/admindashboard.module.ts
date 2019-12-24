import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdmindashboardComponent } from "./admindashboard.component";
import { MenubarComponent } from "./menubar/menubar.component";
import { HomeComponent } from "./home/home.component";
import { AdminDashboardRoutingModule } from "./admin.routing";
import { AddCategoryComponent } from "./add-category/add-category.component";
import { AddBrandComponent } from "./add-brand/add-brand.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { ViewCategoriesComponent } from "./view-categories/view-categories.component";
import { ViewBrandsComponent } from "./view-brands/view-brands.component";
import { ViewProductsComponent } from "./view-products/view-products.component";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {AddService} from './adminServices/add.service';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import {Safe} from '../pipes/style.pipe';


@NgModule({
  declarations: [
    AdmindashboardComponent,
    MenubarComponent,
    HomeComponent,
    AddCategoryComponent,
    AddBrandComponent,
    AddProductComponent,
    ViewCategoriesComponent,
    ViewBrandsComponent,
    ViewProductsComponent,
    Safe
  ],
  providers: [AddService],
  imports: [CommonModule, AdminDashboardRoutingModule, FormsModule, NgbModule, HttpClientModule,ReactiveFormsModule]
})
export class AdmindashboardModule {}
