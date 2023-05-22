import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as Aos from 'aos';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css'],
})
export class SchoolComponent {
  constructor(public ds: DataService) {
    this.getBranch();
    Aos.init();
  }

  allbranch: any = [];

  customOptions: OwlOptions = {
    loop: false,
    dots: false,
    autoplay: true,
    nav: true,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
  };

  getBranch() {
    this.ds.getBranch().subscribe((result: any) => {
      console.log(result);
      this.allbranch = result;
    });
  }
}
