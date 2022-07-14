import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss'],
})
export class InformacionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  returnLogin(){
    this.router.navigate(['/login']);

  }

}
