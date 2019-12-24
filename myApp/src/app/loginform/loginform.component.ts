import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {ValidationsService} from '../services/validations.service';

@Component({
  selector: "app-loginform",
  templateUrl: "./loginform.component.html",
  styleUrls: ["./loginform.component.css"]
})
export class LoginformComponent implements OnInit {
  profileForm: FormGroup;
  errorflag;
  submitted = false;
  @Output() isAdmin: EventEmitter<boolean> = new EventEmitter();
  constructor(
    private modalService: NgbModal,
    public fb: FormBuilder, 
    public validation:ValidationsService) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }
  close() {
    this.modalService.dismissAll();
  }

  onSubmit() {
    this.submitted = true;
    if (!this.profileForm.invalid) {
      if (this.profileForm.value.email==="admin@gmail.com" && this.profileForm.value.password==="admin") {
        this.isAdmin.emit(true);
      }
      else{
        this.isAdmin.emit(false);
      }
      this.errorflag = " ";
      this.close();
    }
  }
}
