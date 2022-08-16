import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchfunComponent } from './searchfun.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SearchfunService } from '../Services/searchfun.service';


const routes: Routes = [
  {path: '', component: SearchfunComponent}
];


@NgModule({
  declarations: [
    SearchfunComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [SearchfunService]
})
export class SearchfunModule { }
