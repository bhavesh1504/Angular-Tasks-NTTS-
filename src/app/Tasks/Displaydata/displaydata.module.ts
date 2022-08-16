import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplaydataComponent } from './displaydata.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { SearchfunService } from '../Services/searchfun.service';

const routes: Routes = [
  {path: '', component: DisplaydataComponent}
];


@NgModule({
  declarations: [
    DisplaydataComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [SearchfunService]
})
export class DisplaydataModule { }
