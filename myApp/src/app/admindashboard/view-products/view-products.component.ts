import { Component, OnInit } from "@angular/core";
import { AddService } from "../adminServices/add.service";

@Component({
  selector: "app-view-products",
  templateUrl: "./view-products.component.html",
  styleUrls: ["./view-products.component.css"]
})
export class ViewProductsComponent implements OnInit {
  products;
  Id = null;
  constructor(public _AddService: AddService) {}

  ngOnInit() {
    this._AddService.getproducts().subscribe(data => {
      this.products = data;
    });
  }

  removeProduct(id) {
    var obj = {
      productId: id
    };
    this._AddService.removeProduct(obj).subscribe(data => {
      this.ngOnInit();
    });
  }

  editProduct(id) {
    this.Id = id;
  }

  cancelEdit() {
    this.Id = null;
    this.ngOnInit();
  }

  updateProduct(product) {
    this._AddService.updateProduct(product).subscribe(data => {
      this.cancelEdit();
    });
  }
}
