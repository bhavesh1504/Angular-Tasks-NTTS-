import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'timer', loadChildren: () => import('./Tasks/Timer/timer.module').then(m => m.TimerModule)},
  {path: 'foreach', loadChildren: () => import('./Tasks/Foreachloop/foreach.module').then(m => m.ForeachModule)},
  {path: 'custompipe', loadChildren: () => import('./Tasks/Custompipe/custompipe.module').then(m => m.CustompipeModule)},
  {path: 'searchfun', loadChildren: ()=> import('./Tasks/Search Fun/searchfun.module').then(m => m.SearchfunModule)},
  {path: 'displaydata', loadChildren: ()=> import('./Tasks/Displaydata/displaydata.module').then(m => m.DisplaydataModule)},
  {path: 'paginationarray', loadChildren: ()=> import('./Tasks/Paginationarray/paginationarray.module').then(m => m.PaginationarrayModule)},
  {path: 'pagination', loadChildren: ()=> import('./Tasks/Pagination/pagination.module').then(m => m.PaginationModule)},
  {path: 'customdirective', loadChildren: ()=> import('./Tasks/Customdirective/customdirective.module').then(m => m.CustomdirectiveModule)},
  {path: 'parent', loadChildren: ()=> import('./Tasks/Parent/parent.module').then(m => m.ParentModule)},
  {path: 'seo', loadChildren: ()=> import('./Tasks/Seo/seo.module').then(m => m.SeoModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
