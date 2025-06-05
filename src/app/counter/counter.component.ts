import {
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter',
  imports: [],
  // Will use separate instance of CounterService for any of Counter component
  providers: [CounterService],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent implements OnInit, DoCheck, OnChanges, OnDestroy {
  constructor(public counterService: CounterService) { }

  ngOnInit() {
    console.log('First render');

    const lsCounter = localStorage.getItem('counter');

    if (lsCounter) {
      this.counterService.counter = +lsCounter;
    }
  }

  ngDoCheck() {
    console.log('Do check is running!', this.counterService.counter);
    localStorage.setItem('counter', this.counterService.counter.toString());
  }

  // TODO: Pass @Input Data to show the difference
  ngOnChanges(changes: SimpleChanges) {
    console.log('On changes is running!', changes);
  }

  ngOnDestroy() {
    console.log('On destroy is running!');
  }

}

interface ExampleDataInterface {
  data: Array<string>;
  method1: () => void;
  method2: () => string;
}

interface SecondaryInterface {
  secondaryMethod: () => void;
}

class Example implements ExampleDataInterface, SecondaryInterface {
  data = ['str1', 'str2'];

  method1() { }

  method2() {
    return this.data[0];
  }

  method3() { }

  secondaryMethod() { }
}

class AdvancedExample extends Example {
  constructor() {
    super();
  }


}