import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomdirectiveComponent } from './customdirective.component';
import { WhiteblackDirective } from './whiteblack.directive';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: CustomdirectiveComponent}
];


@NgModule({
  declarations: [
    CustomdirectiveComponent,
    WhiteblackDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomdirectiveModule { }
