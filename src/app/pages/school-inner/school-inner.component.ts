import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Aos from 'aos';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-school-inner',
  templateUrl: './school-inner.component.html',
  styleUrls: ['./school-inner.component.css'],
})
export class SchoolInnerComponent {
  constructor(private ds: DataService, private route: ActivatedRoute) {
    this.getBranch();
    Aos.init();
    this.route.params.subscribe((params: any) => {
      this.activeId = params.id;
    });
  }

  activeId: any = '';
  branchList: any = [];
  tabList: any = [];
  dateIpt: any = '';
  activeBranch: any = '';

  getBranch() {
    this.ds.getBranch().subscribe((data: any) => {
      data.map((x: any) => {
        this.branchList.push({
          id: x.id,
          status: x.id == this.activeId ? 'active' : '',
          textCode: x.name,
          batch: x.batch,
        });
      });

      if (this.branchList.length != 0) {
        this.changeBranch(this.activeId, this.branchList[0].batch);
      }
    });
  }

  changeBranch(id: number, batch: any) {
    let data: any = new FormData();
    data.append('id', id);
    this.activeBranch = id;

    this.ds.getClassesByBranch(data).subscribe((result: any) => {
      this.tabList = [];
      result.OpenClass.map((x: any) => {
        console.log(x);
        this.tabList.push({
          id: x.id,
          img: this.ds.baseurl + 'OpneClassImages/' + x.packagethumbmail,
          text1: x.classname,
          text2: x.branchName + ' Branch',
          text3: 'Face to Face',
          text4: `5:00 PM`,
          text5: 'PHP ' + x.advancepayment,
          text6: 'Open',
        });
      });
      result.projectClass.map((x: any) => {
        this.tabList.push({
          id: x.id,
          img: this.ds.baseurl + 'ProjectClassImages/' + x.classimg,
          text1: x.name,
          text2: x.branchName + ' Branch',
          text3: 'Face to Face',
          text4: `5:00 PM`,
          text5: 'PHP ' + x.advancepayment,
          text6: 'Regular',
        });
      });
    });
  }

  handleDateChnage() {
    let data: any = new FormData();
    data.append('id', this.activeBranch);
    data.append('date', this.dateIpt);

    this.ds.getClassesByBranchByDate(data).subscribe((result: any) => {
      this.tabList = [];
      result.map((x: any) => {
        this.tabList.push({
          id: x.id,
          img: this.ds.baseurl + 'OpneClassImages/' + x.packagethumbmail,
          text1: x.title,
          text2: x.branchName + ' Branch',
          text3: 'Face to Face',
          text4: `5:00 PM`,
          text5: 'PHP ' + x.advancepayment,
        });
      });
    });
  }
}
