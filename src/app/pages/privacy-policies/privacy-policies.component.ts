import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-privacy-policies',
  templateUrl: './privacy-policies.component.html',
  styleUrls: ['./privacy-policies.component.css'],
})
export class PrivacyPoliciesComponent {
  constructor(private ds: DataService) {
    this.gettermdata();
  }

  xyz: any = '';

  gettermdata() {
    this.ds.getOtherData().subscribe((res: any) => {
      // console.log(res);
      this.xyz = res.privacy;
    });
  }
}
