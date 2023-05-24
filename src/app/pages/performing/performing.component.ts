import { Component } from '@angular/core';
import * as Aos from 'aos';
import { DataService } from 'src/app/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-performing',
  templateUrl: './performing.component.html',
  styleUrls: ['./performing.component.css'],
})
export class PerformingComponent {
  constructor(public ds: DataService) {
    Aos.init();
    this.getperforming();
  }

  slide1: any = [];

  performing: any = '';
  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    autoplay: true,
    margin: 15,
    nav: true,
    autoplayTimeout: 4000,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 4,
      },
      940: {
        items: 5,
      },
    },
  };

  getperforming() {
    this.ds.getArtistData().subscribe((data: any) => {
      // console.log(data[0].name);
      this.performing = data[0];
      if (data.length != 0) {
        // console.log(this.links);
        this.slide1 = JSON.parse(data[0].multipleImage);
        // console.log(this.slide1);
      }
    });
  }
}
