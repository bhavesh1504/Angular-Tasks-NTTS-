import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child/child.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'

const routes: Routes = [
  {path: '', component: ParentComponent},
  {path: 'child', component: ChildComponent}
];

@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ParentModule { }
