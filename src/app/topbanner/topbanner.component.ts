import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbanner',
  templateUrl: './topbanner.component.html',
  styleUrls: ['./topbanner.component.css'],
})
export class TopbannerComponent implements OnInit {
  titulo: string = 'APP Tiempo';

  constructor() {}

  ngOnInit() {}
}
