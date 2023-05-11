import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DataService } from 'src/app/data.service';
// import $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(
    private ds: DataService,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.getHomeData();
  }

  footer_desc = '';
  dance_desc = '';

  getHomeData() {
    this.ds.getSettingData().subscribe((res: any) => {
      if (res.length != 0) {
        this.dance_desc = res[0].dance_desc;
        this.footer_desc = res[0].footer_desc;
        // $(res[0].header_code).appendTo(document.head);
        // $(res[0].footer_code).appendTo(document.body);
        // $('#forJsonLd').html(res[0].page_schema);
      }
    });
  }
}
