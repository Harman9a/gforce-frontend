import { Component } from '@angular/core';
import * as Aos from 'aos';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-show-runner',
  templateUrl: './show-runner.component.html',
  styleUrls: ['./show-runner.component.css'],
})
export class ShowRunnerComponent {
  constructor(public ds: DataService) {
    Aos.init();
    this.getrunner();
  }

  runner: any = '';

  getrunner() {
    this.ds.getRunnerData().subscribe((res: any) => {
      console.log(res);
      this.runner = res[0];
    });
  }
}
