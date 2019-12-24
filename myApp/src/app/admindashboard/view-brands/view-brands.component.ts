import { Component, OnInit } from "@angular/core";
import { AddService } from "../adminServices/add.service";
@Component({
  selector: "app-view-brands",
  templateUrl: "./view-brands.component.html",
  styleUrls: ["./view-brands.component.css"]
})
export class ViewBrandsComponent implements OnInit {
  brands;
  Id = null;

  constructor(public _AddService: AddService) {}
  ngOnInit() {
    this._AddService.getBrands().subscribe(data => {
      this.brands = data;
    });
  }

  removeBrand(id) {
    var obj = {
      brandId: id
    };
    this._AddService.removeBrand(obj).subscribe(data => {
      this.ngOnInit();
    });
  }

  editBrand(id) {
    this.Id = id;
  }

  cancelEdit() {
    this.Id = null;
    this.ngOnInit();
  }
  
  updateBrand(brand) {
    this._AddService.updateBrand(brand).subscribe(data => {
      this.cancelEdit();
    });
  }
}
