import { Component } from '@angular/core';
import * as Aos from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-founder',
  templateUrl: './founder.component.html',
  styleUrls: ['./founder.component.css'],
})
export class FounderComponent {
  constructor(public ds: DataService) {
    Aos.init();
    this.getfoundData();
  }

  found: any = '';
  links: any = [];
  slide: any = [];

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

  getfoundData() {
    this.ds.getFounderData().subscribe((res: any) => {
      console.log(res[0].name);
      this.found = res[0];
      if (res.length != 0) {
        // console.log(this.links);
        this.links = JSON.parse(res[0].socialLinks);
        this.slide = JSON.parse(res[0].multipleImage);
        console.log(this.slide);
      }
    });
  }
}
