import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForeachComponent } from './foreach.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ForeachComponent}
];


@NgModule({
  declarations: [ForeachComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ForeachModule { }
