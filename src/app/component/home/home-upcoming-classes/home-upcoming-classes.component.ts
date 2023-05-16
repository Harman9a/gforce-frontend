import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatDialog } from '@angular/material/dialog';
import { HomeDetailModelComponent } from 'src/app/component/home/home-detail-model/home-detail-model.component';

@Component({
  selector: 'app-home-upcoming-classes',
  templateUrl: './home-upcoming-classes.component.html',
  styleUrls: ['./home-upcoming-classes.component.css'],
})
export class HomeUpcomingClassesComponent {
  constructor(private ds: DataService, private dialog: MatDialog) {
    this.getClasses();
  }
  classList: any = [];

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
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 2,
      },
      940: {
        items: 3,
      },
    },
  };

  customOptions2: OwlOptions = {
    loop: true,
    dots: false,
    autoplay: true,
    margin: 15,
    nav: true,
    autoplayTimeout: 5000,
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
    // {
    //   id: 1,
    //   img: './assets/image/Rectangle 55 (1).png',
    //   txt: 'Workshope With B(12+)',
    // },
    // {
    //   id: 2,
    //   img: './assets/image/Rectangle 55 (2).png',
    //   txt: 'Workshope With B(12+)',
    // },
    // {
    //   id: 3,
    //   img: './assets/image/Rectangle 55.png',
    //   txt: 'Workshope With B(12+)',
    // },
  ];

  getClasses() {
    this.ds.getClasses().subscribe((result: any) => {
      result.map((x: any) => {
        this.classList.push({
          id: x.id,
          img: this.ds.baseurl + 'ProjectClassImages/' + x.classimg,
          txt1: x.name,
          txt2: x.branch,
          dateTime: x.starttime + ' to ' + x.endtime,
        });
      });
    });
    this.ds.getWorkShop().subscribe((result: any) => {
      result.map((x: any) => {
        this.workshopList.push({
          id: x.id,
          img: this.ds.baseurl + 'WorkshopImage/' + x.image,
          txt: x.title,
        });
      });
    });
  }

  handleShowDetails() {
    const dialogRef = this.dialog.open(HomeDetailModelComponent, {
      data: {
        propertyData: 'ok',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
