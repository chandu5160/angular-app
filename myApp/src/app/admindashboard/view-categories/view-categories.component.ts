import { Component, OnInit } from "@angular/core";
import { AddService } from "../adminServices/add.service";

@Component({
  selector: "app-view-categories",
  templateUrl: "./view-categories.component.html",
  styleUrls: ["./view-categories.component.css"]
})
export class ViewCategoriesComponent implements OnInit {
  categories;
  Id=null;
  constructor(public _AddService: AddService) {}

  ngOnInit() {
    this._AddService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  removecategory(id){
    var obj = {
      categoryId:id,
    }
    this._AddService.removeCategory(obj).subscribe(data=>{
      this.ngOnInit();
    });
  }
  editCategory(id){
    this.Id = id;
  }
  cancelEdit(){
    this.Id=null;
    this.ngOnInit();
  }
  updateCategory(category){
    this._AddService.updateCategory(category).subscribe(data=>{
      this.cancelEdit();
    })
  }
}
