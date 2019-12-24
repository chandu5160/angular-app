import { Component, OnInit } from '@angular/core';
import {AddService} from '../adminServices/add.service';
import {CategoryModel} from '../models/category.Model';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {
  brand;
  categoryId;
  categories;
  errorMsg;
  sucessMsg;
  constructor( public _addservice:AddService) { }

  ngOnInit() {
    this._addservice.getCategories().subscribe(data=>{
    this.categories=data;
    });
  }

  addBrand(){
    if(this.categoryId && this.brand){
      this.errorMsg="";
      var data={
        brand_name:this.brand,
        category_id:this.categoryId
      };
      console.log(data);
      this._addservice.addBrand(data).subscribe(res=>{
        if (res == "error") {
          this.errorMsg ='Data is not stored';
        }
        else{
          this.sucessMsg ='data stored';
        }
      })
    }else{
      this.sucessMsg="";
      this.errorMsg="fill all fields";
    }
  }

}
