import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private router: Router,
    private alertController: AlertController,
    private storage: Storage
  ) {}

  ngOnInit() {}

  username: string;
  password: string;

  doLogin() {
    if (this.username != '' && this.password != '') {
      if (this.username == localStorage.getItem("Username") && this.password == localStorage.getItem("Password")) {
        this.router.navigateByUrl('/home');
      } else {
        this.alertSalah();
      }
    } else {
      this.alertKosong();
    }
  }

  async alertKosong() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Peringatan',
      message: 'Username atau Password tidak boleh kosong!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async alertSalah() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Peringatan',
      message: 'Username atau Password salah!',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
