import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/data.service';
import { MatDialog } from '@angular/material/dialog';
import { HomeDetailModelComponent } from 'src/app/component/home/home-detail-model/home-detail-model.component';

@Component({
  selector: 'app-home-active-classes',
  templateUrl: './home-active-classes.component.html',
  styleUrls: ['./home-active-classes.component.css'],
})
export class HomeActiveClassesComponent {
  bgImg = '15815.png';

  constructor(private ds: DataService, private dialog: MatDialog) {
    this.getEvents();
  }

  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    autoplay: true,
    margin: 10,
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
        items: 2,
      },
    },
  };

  classList: any = [];

  getEvents() {
    this.ds.getOpenClasses().subscribe((res: any) => {
      res.map((x: any) => {
        this.classList.push({
          id: x.id,
          img: './assets/image/Group 15818.png',
          title: x.page_title,
          bgImg: this.ds.baseurl + '/OpneClassImages/' + x.packagethumbmail,
          day: new Date(x.scheduledate).toDateString(),
          time: x.scheduletime,
          featureTxt: 'Featured Class',
          classname: x.classname,
        });
      });
    });
  }

  handleShowDetails(id: any, type: string) {
    const dialogRef = this.dialog.open(HomeDetailModelComponent, {
      data: {
        id: id,
        type,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
