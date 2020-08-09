import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrasi',
  templateUrl: './registrasi.page.html',
  styleUrls: ['./registrasi.page.scss'],
})
export class RegistrasiPage implements OnInit {
  constructor(
    private router: Router
  ) {}

  ngOnInit() {}

  username: string
  password: string

  doRegistrasi() {
    localStorage.setItem('Username', this.username)
    localStorage.setItem('Password', this.password)
    this.router.navigateByUrl('/login')
  }
}
