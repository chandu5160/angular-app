import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ValidationsService } from "../services/validations.service";

@Component({
  selector: "app-registrationform",
  templateUrl: "./registrationform.component.html",
  styleUrls: ["./registrationform.component.css"]
})
export class RegistrationformComponent implements OnInit {
  name = "";
  email = "";
  gender = "";
  password = "";
  password1 = "";
  errorflag = "";
  flag = false;
  @Output() openLogin = new EventEmitter();
  constructor(
    private modalService: NgbModal,
    public validations: ValidationsService
  ) {}

  ngOnInit() {}
  register() {
    this.flag = true;
    if (this.validations.allValidations()) {
      this.close();
    } else {
    }
  }
  close() {
    this.modalService.dismissAll();
  }
}
