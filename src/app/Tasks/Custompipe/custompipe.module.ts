import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustompipeComponent } from './custompipe.component';
import { RouterModule, Routes } from '@angular/router';
import { CustompipePipe } from './custompipe.pipe';

const routes: Routes = [
  {path: '', component: CustompipeComponent},
];


@NgModule({
  declarations: [
    CustompipeComponent,
    CustompipePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustompipeModule { }
