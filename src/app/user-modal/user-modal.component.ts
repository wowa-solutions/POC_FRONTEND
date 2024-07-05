import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';


@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {

  showModal: boolean = false;
  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {

  }

  openModal() {
    console.log("clicked user modal");
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  logoutProcess(){
    this.loginService.logoutProcess();
  }
}
