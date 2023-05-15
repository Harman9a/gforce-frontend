import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/data.service';
import { HomeDetailModelComponent } from '../../component/home/home-detail-model/home-detail-model.component';

@Component({
  selector: 'app-show-runner-inner',
  templateUrl: './show-runner-inner.component.html',
  styleUrls: ['./show-runner-inner.component.css'],
})
export class ShowRunnerInnerComponent {
  constructor(private ds: DataService, private dialog: MatDialog) {
    this.getClasses();
  }

  classList: any = [];
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

  workshopList: any = [];

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