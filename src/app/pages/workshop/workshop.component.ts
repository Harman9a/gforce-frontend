import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css'],
})
export class WorkshopComponent {
  constructor(private ds: DataService) {
    this.getBranch();
  }
  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    autoplay: true,
    margin: 50,
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

  branchList: any = [];

  tabswitch: any = [];

  tabList: any = [];

  getBranch() {
    this.ds.getBranch().subscribe((data: any) => {
      data.map((x: any) => {
        this.branchList.push({
          id: x.id,
          textCode: x.name,
          img: './assets/image/Rectangle 2882.png',
          batch: x.batch,
        });
      });
      if (this.branchList.length != 0) {
        this.changeBranch(this.branchList[0].id, this.branchList[0].batch);
      }
    });
  }

  changeBranch(id: number, batch: any) {
    let totalNo = parseInt(batch);
    this.tabswitch = [];
    for (let i = 1; i <= totalNo; i++) {
      this.tabswitch.push({
        id: i,
        button: `Batch ${i}`,
      });
    }

    let data: any = new FormData();
    data.append('id', id);

    this.ds.getWorkShopByBranch(data).subscribe((result: any) => {
      this.tabList = [];
      result.map((x: any) => {
        let workshopdates = JSON.parse(x.workshopdates);
        console.log(this.ds.baseurl + 'WorkshopImage/' + x.image);
        this.tabList.push({
          id: x.id,
          img: this.ds.baseurl + 'WorkshopImage/' + x.image,
          text1: x.title,
          text2: x.branchName + ' Branch',
          text3: 'Face to Face',
          text4: `${workshopdates[0]} 5:00 PM`,
          text5: 'PHP ' + x.price,
        });
      });
    });
  }

  getClasses() {
    this.ds.getClasses().subscribe((result) => {
      console.log(result);
    });
  }
  showWorkshopDetails() {}
}
