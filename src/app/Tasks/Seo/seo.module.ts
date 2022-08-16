import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoComponent } from './seo.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './Aboutus/aboutus.component';
import { ContactusComponent } from './Contactus/contactus.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { GetstartedComponent } from './Getstarted/getstarted.component';
import { MyprofileComponent } from './Myprofile/myprofile.component';

const routes: Routes = [
  {path: '', component: SeoComponent},
  {path: 'aboutus', component: AboutusComponent,title: 'Aboutus'},
  {path: 'contactus', component: ContactusComponent, title: 'Contactus'},
  {path: 'dashboard', component: DashboardComponent, title: 'Dashboard'},
  {path: 'getstarted', component: GetstartedComponent, title: 'Getstarted'},
  {path: 'myprofile', component: MyprofileComponent, title: 'Myprofile'}
];



@NgModule({
  declarations: [
    SeoComponent,
    AboutusComponent,
    ContactusComponent,
    DashboardComponent,
    GetstartedComponent,
    MyprofileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SeoModule { }
