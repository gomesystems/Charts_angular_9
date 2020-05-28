import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartExemploComponent } from './line-chart-exemplo/line-chart-exemplo.component';
import { BarChartExemploComponent } from './bar-chart-exemplo/bar-chart-exemplo.component';
import { DoughnutChartExemploComponent } from './doughnut-chart-exemplo/doughnut-chart-exemplo.component';

@NgModule({
   declarations: [
      AppComponent,
      LineChartExemploComponent,
      BarChartExemploComponent,
      DoughnutChartExemploComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ChartsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
