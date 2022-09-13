import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css'],
})
export class TempComponent implements OnInit {
  temp = '25';

  constructor() {}

  ngOnInit() {}

  // Funciones

  resetTemperatuta() {
    this.temp = '-';
  }
}
