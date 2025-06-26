import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bannerData1 = dataFake[0];
  bannerData2 = dataFake[1];
  bannerData3 = dataFake[2];

  smallCardData1 = dataFake[0];
  smallCardData2 = dataFake[1];
  smallCardData3 = dataFake[2];
  constructor() { }

  ngOnInit(): void {
  }

}
