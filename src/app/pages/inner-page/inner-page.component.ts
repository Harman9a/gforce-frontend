import { Component } from '@angular/core';

@Component({
  selector: 'app-inner-page',
  templateUrl: './inner-page.component.html',
  styleUrls: ['./inner-page.component.css'],
})
export class InnerPageComponent {
  classList: any = [
    {
      id: 1,
      img: './assets/image/Group 16055.png',
      txt1: 'Hip Hop With B(12+)',
      txt2: 'Alabang Branch',
      dateTime: 'March 17, 2023 6:00pm',
    },
    {
      id: 2,
      img: './assets/image/Group 16057.png',
      txt1: 'Hip Hop With B(12+)',
      txt2: 'Alabang Branch',
      dateTime: 'March 17, 2023 6:00pm',
    },
    {
      id: 3,
      img: './assets/image/Group 16056.png',
      txt1: 'Hip Hop With B(12+)',
      txt2: 'Alabang Branch',
      dateTime: 'March 17, 2023 6:00pm',
    },
    {
      id: 4,
      img: './assets/image/Group 16055.png',
      txt1: 'Hip Hop With B(12+)',
      txt2: 'Alabang Branch',
      dateTime: 'March 17, 2023 6:00pm',
    },
    {
      id: 5,
      img: './assets/image/Group 16057.png',
      txt1: 'Hip Hop With B(12+)',
      txt2: 'Alabang Branch',
      dateTime: 'March 17, 2023 6:00pm',
    },
    {
      id: 6,
      img: './assets/image/Group 16056.png',
      txt1: 'Hip Hop With B(12+)',
      txt2: 'Alabang Branch',
      dateTime: 'March 17, 2023 6:00pm',
    },
  ];

  workshopList: any = [
    {
      id: 1,
      img: './assets/image/Rectangle 55 (1).png',
      txt: 'Workshope With B(12+)',
    },
    {
      id: 2,
      img: './assets/image/Rectangle 55 (2).png',
      txt: 'Workshope With B(12+)',
    },
    {
      id: 3,
      img: './assets/image/Rectangle 55.png',
      txt: 'Workshope With B(12+)',
    },
  ];

  cardList: any = [
    {
      id: 1,
      img: './assets/image/gelai-dancehall 2 (2).png',
      txt1: "Beginner's Hip-Hop with Kristine (8+)",
      txt2: 'Cebe sent Branch',
      txt3: 'Face to Face',
      txt4: 'January 16, 2023 5:00 PM',
      txt5: 'P350.00',
    },
    {
      id: 2,
      img: './assets/image/gelai-dancehall 2 (1).png',
      txt1: "Beginner's Hip-Hop with Kristine (8+)",
      txt2: 'Cebe sent Branch',
      txt3: 'Face to Face',
      txt4: 'January 16, 2023 5:00 PM',
      txt5: 'P350.00',
    },
    {
      id: 3,
      img: './assets/image/gelai-dancehall 2.png',
      txt1: "Beginner's Hip-Hop with Kristine (8+)",
      txt2: 'Cebe sent Branch',
      txt3: 'Face to Face',
      txt4: 'January 16, 2023 5:00 PM',
      txt5: 'P350.00',
    },
  ];

  tabSwitch: any = [
    {
      id: 1,
      button1: 'Quezon City Branch',
    },
    {
      id: 2,
      button1: 'Alabang Branch',
    },
    {
      id: 3,
      button1: 'Cebu City Branch',
    },
  ];
}
