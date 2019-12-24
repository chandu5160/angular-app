import { Component, OnInit } from "@angular/core";
import { AddService } from "../adminServices/add.service";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class AddProductComponent implements OnInit {
  categoryId;

  categories;
  brands;
  brandId;
  product;
  quantity;
  errorMsg;
  succmsg;
  constructor(public _AddService: AddService) {}

  ngOnInit() {
    this._AddService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  getBrands() {
    this._AddService.getBrandsByCatgoryId(this.categoryId).subscribe(data => {
      this.brands = data;
    });
  }

  saveProduct() {
    if (this.brandId && this.product && this.quantity) {
      this.errorMsg = "";
      var data={
        product:this.product,
        brandId:this.brandId,
        quantity:this.quantity
      };
      console.log(data);
      this._AddService.addProduct(data).subscribe(res=>{
        if (res == "error") {
          this.errorMsg ='Data is not stored';
        }
        else{
          this.succmsg ='data stored';
        }
      })
    } else {
      this.errorMsg = "fill all fields";
    }
  }
}
