import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { AddCategoryComponent } from "./add-category/add-category.component";
import { AddBrandComponent } from "./add-brand/add-brand.component";
import { AddProductComponent } from "./add-product/add-product.component";
import {ViewCategoriesComponent} from './view-categories/view-categories.component';
import {ViewBrandsComponent} from './view-brands/view-brands.component';
import {ViewProductsComponent} from './view-products/view-products.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "addcategory",
    component: AddCategoryComponent
  },
  {
    path: "addbrand",
    component: AddBrandComponent
  },
  {
    path: "addproduct",
    component: AddProductComponent
  },
  {
    path: "viewcategory",
    component: ViewCategoriesComponent
  },
  {
    path: "viewbrand",
    component: ViewBrandsComponent
  },
  {
    path: "viewproduct",
    component: ViewProductsComponent
  },
  {
    path: "**",
    component: ViewProductsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule {}
