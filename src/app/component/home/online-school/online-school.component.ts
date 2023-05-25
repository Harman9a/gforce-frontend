import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/data.service';
import { HomeDetailModelComponent } from '../home-detail-model/home-detail-model.component';
import * as Aos from 'aos';
import { VideoPlayPopupComponent } from '../video-play-popup/video-play-popup.component';

@Component({
  selector: 'app-online-school',
  templateUrl: './online-school.component.html',
  styleUrls: ['./online-school.component.css'],
})
export class OnlineSchoolComponent {
  constructor(public ds: DataService, private dialog: MatDialog) {
    this.getClasses();
    Aos.init();
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

  onlineData: any = [];
  schoolData: any = [];

  getClasses() {
    this.ds.getOnlineSchool().subscribe((result: any) => {
      if (result.length != 0) {
        this.schoolData = result[0];
      }
    });
    this.ds.getOnlineSchoolVideos().subscribe((result: any) => {
      this.onlineData = result;
    });
  }

  showVideoPopup(id: number) {
    const dialogRef = this.dialog.open(VideoPlayPopupComponent, {
      data: {
        id,
      },
    });

    dialogRef.afterClosed().subscribe((result: any) => {});
  }
}
