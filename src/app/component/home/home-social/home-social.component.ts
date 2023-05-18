import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home-social',
  templateUrl: './home-social.component.html',
  styleUrls: ['./home-social.component.css'],
})
export class HomeSocialComponent {
  constructor(public ds: DataService) {
    this.getHomeData();
  }

  homeData: any = [];
  links: any = [];

  getHomeData() {
    this.ds.getSettingData().subscribe((res: any) => {
      if (res.length != 0) {
        this.homeData = res[0];
        this.links = JSON.parse(res[0].ameneties);
        this.links[0].img = './assets/image/Rectangle 36.png';
        this.links[1].img = './assets/image/Rectangle 37.png';
        this.links[2].img = './assets/image/Rectangle 38.png';
        this.links[3].img = './assets/image/Rectangle 39.png';
        // console.log(this.links);
      }
    });
  }
}
