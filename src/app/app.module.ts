import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonthpickerComponent } from './monthpicker/monthpicker.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MonthpickerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
