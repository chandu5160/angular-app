import { Component, OnInit, Input } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  @Input() isAdmin: boolean;
  constructor(private modalService: NgbModal, public router: Router) {}
  adminflag;
  model;
  navbarOpen = false;

  ngOnInit() {
    if (!this.adminflag) {
      this.router.navigate([""]);
    } else {
      this.router.navigate(["admin"]);
    }
    // this.router.navigate(["admin"]);
  }

  changeuser(data: boolean) {
    this.adminflag = data;
    this.ngOnInit();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  open(content) {
    this.modalService.open(content);
  }
  check(content){
console.log("Hello");
  }
}
