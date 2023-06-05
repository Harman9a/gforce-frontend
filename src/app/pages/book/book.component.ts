import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  constructor(
    public ds: DataService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {
    this.route.params.subscribe((params: any) => {
      this.activeId = params.id;
      this.bookingType = params.name;
    });
    let isLogin: any = localStorage.getItem('isLogin');
    if (isLogin != null) {
      this.getUserData();
    } else {
      this.router.navigateByUrl('login');
    }
  }

  activeUser: any = [];
  activeWorkshop: any = [];

  bookingType = '';

  activeId: any = 0;
  cardHolderName: any = '';
  cardNo: any = '';
  exMonth: any = '';
  exYear: any = '';
  cvv: any = '';
  price: any = '';

  cardHolderNameErr: any = false;
  cardNoErr: any = false;
  exMonthErr: any = false;
  exYearErr: any = false;
  cvvErr: any = false;

  cardNoErr2: any = false;

  ngOnInit() {
    this.getSingleWorkShop();
  }

  handlePayment() {
    let result = true;

    if (this.cardHolderName == '') {
      this.cardHolderNameErr = true;
      result = false;
    } else {
      this.cardHolderNameErr = false;
      result = true;
    }

    if (this.cardNo == '') {
      this.cardNoErr = true;
      result = false;
    } else {
      this.cardNoErr = false;
      result = true;
      if (JSON.stringify(this.cardNo).length == 18) {
        console.log('if', JSON.stringify(this.cardNo).length);
        this.cardNoErr2 = false;
        result = true;
      } else {
        console.log('else', JSON.stringify(this.cardNo).length);

        this.cardNoErr2 = true;
        result = false;
      }
    }

    if (this.exMonth == '') {
      this.exMonthErr = true;
      result = false;
    } else {
      this.exMonthErr = false;
      result = true;
    }

    if (this.exYear == '') {
      this.exYearErr = true;
      result = false;
    } else {
      this.exYearErr = false;
      result = true;
    }

    if (this.cvv == '') {
      this.cvvErr = true;
      result = false;
    } else {
      this.cvvErr = false;
      result = true;
    }

    if (result) {
      this.spinner.show();
      let data = new FormData();

      data.append('cno', this.cardNo);
      data.append('emonth', this.exMonth);
      data.append('eyear', this.exYear);
      data.append('cvv', this.cvv);
      data.append(
        'boat',
        this.activeWorkshop.price == undefined
          ? this.activeWorkshop.advancepayment
          : this.activeWorkshop.price
      );

      this.ds.handlePayment(data).subscribe((res: any) => {
        let payment_id = res.payment_method;
        let payment_intent = res.id;
        let data2 = new FormData();
        data2.append('student_id', this.activeUser.id);
        data2.append('booking_id', this.activeId);
        data2.append('payment_id', payment_id);
        data2.append('payment_intent_id', payment_intent);

        if (this.bookingType == 'projectClass') {
          data2.append('type', 'p_class');
        } else {
          data2.append('type', this.bookingType);
        }

        data2.append(
          'price',
          this.activeWorkshop.price == undefined
            ? this.activeWorkshop.advancepayment
            : this.activeWorkshop.price
        );
        this.ds.savePaymentId(data2).subscribe((res2: any) => {
          this.spinner.hide();
          window.location.href = res.next_action.redirect_to_url.url;
        });
      });
    }
  }

  getSingleWorkShop() {
    if (this.bookingType == 'workshop') {
      let data = new FormData();
      data.append('id', this.activeId);

      this.ds.getWorkShopSingle(data).subscribe((res: any) => {
        if (res.length != 0) {
          this.activeWorkshop = res[0];
          this.activeWorkshop.workshopdates = JSON.parse(
            this.activeWorkshop.workshopdates
          );
        }
      });
    } else if (this.bookingType == 'openClass') {
      let data = new FormData();
      data.append('id', this.activeId);

      this.ds.getOpenClassSingle(data).subscribe((res: any) => {
        if (res.length != 0) {
          this.activeWorkshop = res[0];
          this.activeWorkshop.workshopdates = [
            this.activeWorkshop.scheduledate,
          ];
          this.activeWorkshop.starttime = this.activeUser.scheduletime;
        }
      });
    } else if (this.bookingType == 'projectClass') {
      let data = new FormData();
      data.append('id', this.activeId);

      this.ds.getProjectClassSingle(data).subscribe((res: any) => {
        if (res.length != 0) {
          this.activeWorkshop = res[0];
          // this.activeWorkshop.workshopdates = [
          //   this.activeWorkshop.scheduledate,
          // ];
          // this.activeWorkshop.starttime = this.activeUser.scheduletime;
        }
      });
    }
  }

  getUserData() {
    let data: any = new FormData();
    let isLogin: any = localStorage.getItem('isLogin');
    let token = JSON.parse(isLogin).token;

    data.append('token', token);

    this.ds.getProfile(data).subscribe((res: any) => {
      if (res.length != 0) {
        this.activeUser = res[0];
      }
    });
  }
}
