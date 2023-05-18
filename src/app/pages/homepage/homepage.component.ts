import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  constructor(
    private ds: DataService,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.getHomeData();
  }

  homeData: any = [];

  getHomeData() {
    this.ds.getSettingData().subscribe((res: any) => {
      if (res.length != 0) {
        this.homeData = res[0];
        this.titleService.setTitle(res[0].page_title);
        this.metaService.updateTag({
          name: 'description',
          content: res[0].page_description,
        });
      }
    });
  }
}
