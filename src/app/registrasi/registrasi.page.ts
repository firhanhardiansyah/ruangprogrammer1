import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrasi',
  templateUrl: './registrasi.page.html',
  styleUrls: ['./registrasi.page.scss'],
})
export class RegistrasiPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  username: string;
  password: string;

  doRegis() {
    console.log("Username : " + this.username);
    console.log('Password : ' + this.password);
  }
}
