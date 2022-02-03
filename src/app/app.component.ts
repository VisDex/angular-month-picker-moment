import { Component } from '@angular/core';

import moment from 'moment';
import 'moment/locale/de';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

  selectedYearAsText: string;
  selectedMonthIndex: number;
  selectedMonthAsText: string;

  onChange(event: { monthIndex: number, year: number }) {
    this.selectedYearAsText = event.year.toString();
    this.selectedMonthIndex = event.monthIndex;
    this.selectedMonthAsText = moment().month(event.monthIndex).format('MMMM');

    // console.warn(this.selectedYearAsText, this.selectedMonthAsText, `(month index: ${this.selectedMonthIndex})`);
  }
}
