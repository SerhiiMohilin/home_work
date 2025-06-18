import {
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
  SlicePipe,
  CurrencyPipe,
  PercentPipe,
  DatePipe,
  JsonPipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { DescribeObjectPipe } from '../describe-object.pipe';

@Component({
  selector: 'app-pipes',
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    SlicePipe,
    CurrencyPipe,
    PercentPipe,
    DatePipe,
    JsonPipe,
    DescribeObjectPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  currentDate = new Date();

  data = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };
}