import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  constructor(public ds: DataService) {
    this.getPackages();
  }
  shopTabs: any = [
    {
      id: 1,
      text1: `Quezon City Branch`,
    },
    {
      id: 2,
      text1: `Alabang Branch`,
    },
    {
      id: 3,
      text1: `Cebu City Branch`,
    },
  ];

  shopCards: any = [
    {
      id: 1,
      txt1: `3 Classes`,
      txt2: `Alabang Branch`,
      txt3: `Valid for 7 days`,
      txt4: `₱1,275.00`,
      img: `../../../assets/image/Rectangle22.png`,
    },
    {
      id: 2,
      txt1: `3 Classes`,
      txt2: `Alabang Branch`,
      txt3: `Valid for 7 days`,
      txt4: `₱1,275.00`,
      img: `../../../assets/image/Rectangle28.png`,
    },
    {
      id: 3,
      txt1: `3 Classes`,
      txt2: `Alabang Branch`,
      txt3: `Valid for 7 days`,
      txt4: `₱1,275.00`,
      img: `../../../assets/image/Rectangle52.png`,
    },
  ];

  getPackages() {
    // this.ds.getPackages().subscribe
  }
}
