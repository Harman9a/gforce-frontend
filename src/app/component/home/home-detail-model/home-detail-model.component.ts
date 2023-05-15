import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home-detail-model',
  templateUrl: './home-detail-model.component.html',
  styleUrls: ['./home-detail-model.component.css'],
})
export class HomeDetailModelComponent {
  constructor(private ds: DataService) {
    this.getClasses();
  }

  classList: any = [];
  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    autoplay: true,
    margin: 15,
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
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
  };

  workshopList: any = [
    {
      id: 1,
      img: './assets/image/Rectangle 55 (1).png',
      txt: 'Workshope With B(12+)',
    },
    {
      id: 2,
      img: './assets/image/Rectangle 55 (2).png',
      txt: 'Workshope With B(12+)',
    },
    {
      id: 3,
      img: './assets/image/Rectangle 55.png',
      txt: 'Workshope With B(12+)',
    },
  ];

  getClasses() {
    this.ds.getClasses().subscribe((result: any) => {
      console.log(result);
      result.map((x: any) => {
        this.classList.push({
          id: x.id,
          img: this.ds.baseurl + 'ProjectClassImages/' + x.classimg,
          txt1: x.name,
          txt2: x.branch,
          dateTime: x.starttime + '-' + x.endtime,
        });
      });
    });
    // this.ds.getWorkShop().subscribe((result: any) => {
    //   console.log(result);
    //   result.map((x: any) => {
    //     this.workshopList.push({
    //       id: x.id,
    //       img: this.ds.baseurl + 'WorkshopImage/' + x.image,
    //       txt: x.title,
    //     });
    //   });
    // });
  }
}
