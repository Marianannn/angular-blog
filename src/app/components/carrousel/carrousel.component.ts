import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent {
  bannerNumber:number = 0
  @Input() banner!: { id: string; photoCover: string; title: string };

  next(){
    // this.bannerNumber++
    console.log(this.bannerNumber)
    this.bannerNumber = (this.bannerNumber + 1) % 4
    this.atualizaBanner()
  }

  previous(){

    this.bannerNumber = (this.bannerNumber - 1+ 4) % 4
    this.atualizaBanner()

    
    console.log(this.bannerNumber)
  }

  atualizaBanner() {
  const item = dataFake[this.bannerNumber];
  this.banner = {
    id: item.id,
    photoCover: item.photoCover,
    title: item.title
  };
}


}
