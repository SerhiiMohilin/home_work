import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }
  counter: number = 0;

  highCountValue: number = 10;
  lowCountValue: number = -1;

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }
}
