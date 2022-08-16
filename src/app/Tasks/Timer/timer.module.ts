import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';
import { RouterModule, Routes } from '@angular/router';
import { IntervalComponent } from '../Interval/interval.component';

const routes: Routes = [
  {path: '', component: TimerComponent},
  {path: 'interval', component: IntervalComponent, title:'Interval'}
];


@NgModule({
  declarations: [
    TimerComponent,
    IntervalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TimerModule { }
