import { Component, OnInit } from "@angular/core";
import { AddService } from "../adminServices/add.service";

@Component({
  selector: "app-add-category",
  templateUrl: "./add-category.component.html",
  styleUrls: ["./add-category.component.css"]
})
export class AddCategoryComponent implements OnInit {
  errormsg='<p></p>';
  category: string;
  constructor(public _AddService: AddService) {}

  ngOnInit() {}
  
  addCategory() {
    if (this.category == null || this.category == "") {
      this.errormsg ='<span style="color: red;">please fill data</span>';
    } else {
      this.errormsg = '<p></p>';
      var result;
      this._AddService.addCategory(this.category).subscribe(data => {
        result = data;
      });
      if (result == "error") {
        this.errormsg ='<span style="color: red;">Data is not stored</span>';
      }
      else{
        this.errormsg ='<span style="color:green;">data stored</span>';
      }
    }
  }
}