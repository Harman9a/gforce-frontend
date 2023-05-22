import { Component, Inject } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-home-detail-model',
  templateUrl: './home-detail-model.component.html',
  styleUrls: ['./home-detail-model.component.css'],
})
export class HomeDetailModelComponent {
  constructor(
    public ds: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // console.log(data);

    this.getClasses();
  }

  classList: any = [];
  dummyText: any = '';
  activeClass: any = [];
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
        items: 1,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
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
    let data = new FormData();
    data.append('id', this.data.id);
    data.append('type', this.data.type);

    this.ds.getPopData(data).subscribe((result: any) => {
      if (result.length != 0) {
        result.map((x: any) => {
          x.links = JSON.parse(x.links);
        });
        this.activeClass = result[0];
        this.dummyText = `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and
        more recently with desktop publishing software like Aldus PageMaker
        including versions of Lorem Ipsum.`;
      }
      console.log(this.activeClass);
    });
  }
}
