import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  user: any
  password: any

  constructor(private router: Router) { }

  ngOnInit() {}

  login(){
    this.router.navigate(['/home/registro']);

  }

  mostrarInformacionGeneral(){
    this.router.navigate(['/info']);

  }

}
