import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  // @Input()
  // photoCover:string = ""

  // @Input()
  // cardTitle:string = ""

  // @Input()
  // Id:string="0"
  @Input() smallCard!:{
    id: string;
    photoCover: string;
    title: string;
    description: string;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
