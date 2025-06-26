import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-banner',
  templateUrl: './menu-banner.component.html',
  styleUrls: ['./menu-banner.component.css']
})
export class MenuBannerComponent implements OnInit {

  @Input() id: string = '';
  @Input() bannerImage: string = '';
  @Input() bannerTitle: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
