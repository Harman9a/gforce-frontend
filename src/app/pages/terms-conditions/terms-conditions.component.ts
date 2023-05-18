import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css'],
})
export class TermsConditionsComponent {
  constructor(private ds: DataService) {
    this.gettermdata();
  }

  abc: any = '';

  gettermdata() {
    this.ds.getOtherData().subscribe((res: any) => {
      this.abc = res.term_condetion;
    });
  }
}
