import { Component, Input } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.css'],
})
export class HomeAboutComponent {
  constructor(public ds: DataService) {
    this.getHomeData();
  }

  homeData: any = [];

  getHomeData() {
    this.ds.getSettingData().subscribe((res: any) => {
      if (res.length != 0) {
        this.homeData = res[0];
        // console.log(this.homeData);
      }
    });
  }
}
