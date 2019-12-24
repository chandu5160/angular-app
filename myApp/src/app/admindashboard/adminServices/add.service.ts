import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import {CategoryModel} from '../models/category.Model'

@Injectable({
  providedIn: "root"
})
export class AddService {
  constructor(private http: HttpClient) {}
  addCategory(category):Observable<string> {
    const obj = {
      category_name: category
    };
    return this.http.post<string>("http://localhost:5000/addCategory", obj);
  }

  getCategories(){
    return this.http.get("http://localhost:5000/getCategories");
  }

  addBrand(data):Observable<string>{

    return this.http.post<string>("http://localhost:5000/addBrand", data);
  }

  getBrandsByCatgoryId(id){
    const obj = {
      category_id: id
    };
    return this.http.post("http://localhost:5000/getBrandsByCatgoryId",obj);
  }

  addProduct(data):Observable<string>{

    return this.http.post<string>("http://localhost:5000/addProduct", data);
  }

  getproducts(){
    return this.http.get("http://localhost:5000/getProducts");
  }
  getBrands(){
    return this.http.get("http://localhost:5000/getBrands");
  }

  removeProduct(data){
    return this.http.post<string>("http://localhost:5000/removeProduct", data);
  }
  
  removeBrand(data){
    return this.http.post<string>("http://localhost:5000/removeBrand", data);
  }
  removeCategory(data){
    return this.http.post<string>("http://localhost:5000/removeCategory", data);
  }

  updateCategory(data){
    return this.http.post<string>("http://localhost:5000/updateCategory", data);
  }

  updateBrand(data){
    return this.http.post<string>("http://localhost:5000/updateBrand", data);
  }

  updateProduct(data){
    return this.http.post<string>("http://localhost:5000/updateProduct", data);
  }
}
