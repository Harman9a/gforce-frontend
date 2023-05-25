import { Component, Input } from '@angular/core';
import * as Aos from 'aos';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css'],
})
export class HomeBannerComponent {
  @Input() homeData: any;
  constructor(public ds: DataService) {
    Aos.init();
    this.getData();
  }

  bannerImg: any = './assets/image/Group 15948.png';

  getData() {
    this.ds.getSettingData().subscribe((res: any) => {
      if (res.length != 0) {
        this.bannerImg = this.ds.baseurl + 'BannerImage/' + res[0].banner_image;
      }
    });
  }
}
