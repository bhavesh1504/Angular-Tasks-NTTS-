import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { SearchfunService } from '../Services/searchfun.service';


export interface UserData{
  id : string,
  userId : string,
  Title : string,
  Body : string
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent  {

  title = 'DarkMode';
  isDarkTheme = false;
  displayedColumn : string[] = ['id', 'userId','title', 'body']
  dataSource! : MatTableDataSource<UserData>
  @ViewChild(MatPaginator) paginator! : MatPaginator
  @ViewChild(MatSort) sort! : MatSort
  posts:any;
  constructor (private _searchfunservice: SearchfunService, private titleservice : Title) {
    this._searchfunservice.getData().subscribe((data) =>{
      console.log(data)
      this.posts= data
      this.dataSource = new MatTableDataSource(this.posts)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    titleservice.setTitle('Pagination');
  }
    applyFilter (event : Event){
      const FilterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = FilterValue.trim().toLowerCase();
      if (this.dataSource.paginator){
        this.paginator.firstPage()
      }
    }
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      if (this.title == "DarkMode"){
          this.title="LightMode"
      }
      else{
        this.title="DarkMode"
      }
  
    }

}
