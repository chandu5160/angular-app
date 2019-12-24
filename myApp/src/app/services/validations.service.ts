import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class ValidationsService {
  validation:boolean=false;
  constructor() {}

  nameValidation(name: string) {
    var nameExp = /^[a-zA-Z ]*$/;
    name;
    if (name == "" || name == null) {
      this.validation=false;
      return "please enter name";
    } else if (!nameExp.test(name)) {
      this.validation=false;
      return "only alphabets";
    } else {
      this.validation=true;
      return " ";
    }
  }

  emailValidation(email) {
    var emailExp = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
    if (email == null || email == "") {
      this.validation=false;
      return "please enter email";
    } else if (!emailExp.test(email)) {
      this.validation=false;
      console.log("entered");
      return "please enter valid email";
    } else {
      this.validation=true;
      return " ";
    }
  }

  passwordValidation(password) {
    var passwordExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,32}$/;
    if (password == null || password == "") {
      this.validation=false;
      return "please enter password";
    } else if (!passwordExp.test(password)) {
      this.validation=false;
      return "password doesnt meet rules";
    } else {
      this.validation=true;
      return " ";
    }
  }

  passwordConfirmation(password, rePassword) {
    if (rePassword == null || rePassword == "") {
      this.validation=false;
      return "please confirm password";
    } else if (!(password == rePassword)) {
      this.validation=false;
      return "password doesnot match";
    } else {
      this.validation=true;
      return " ";
    }
  }

  genderValidation(gender) {
    if (gender == null || gender == "") {
      this.validation=false;
      return "please select gender";
    } else {
      this.validation=true;
      return " ";
    }
  }

  allValidations(){
    return  this.validation;
  }
}
