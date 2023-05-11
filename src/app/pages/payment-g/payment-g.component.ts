import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-g',
  templateUrl: './payment-g.component.html',
  styleUrls: ['./payment-g.component.css']
})
export class PaymentGComponent {
  handlepayment(){
    console.log('ok')
  }
}
