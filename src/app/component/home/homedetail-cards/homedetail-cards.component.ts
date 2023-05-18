import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-homedetail-cards',
  templateUrl: './homedetail-cards.component.html',
  styleUrls: ['./homedetail-cards.component.css'],
})
export class HomedetailCardsComponent {
  constructor(public ds: DataService) {
    this.getHomeData();
  }

  homeData: any = [];

  getHomeData() {
    this.ds.getAchievement().subscribe((res: any) => {
      // console.log(res);
      this.homeData = res;
    });
  }
}
