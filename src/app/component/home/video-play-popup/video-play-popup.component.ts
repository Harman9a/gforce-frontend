import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-video-play-popup',
  templateUrl: './video-play-popup.component.html',
  styleUrls: ['./video-play-popup.component.css'],
})
export class VideoPlayPopupComponent {
  constructor(
    public ds: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // console.log(data);

    this.getClasses();
  }

  videoData: any = [];
  onlineData: any = [];

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
    this.ds.getOnlineSchoolVideos().subscribe((result: any) => {
      this.onlineData = result;
    });
    let data = new FormData();
    data.append('id', this.data.id);
    this.ds.getSingleVideoData(data).subscribe((result: any) => {
      if (result.length != 0) {
        this.videoData = result[0];
        console.log(result[0]);
      }
    });
  }
}
