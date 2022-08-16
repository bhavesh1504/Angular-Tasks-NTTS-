import { AfterViewInit, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SearchfunService } from '../Services/searchfun.service';
import { Search } from './searchinterface';

@Component({
  selector: 'app-searchfun',
  templateUrl: './searchfun.component.html',
  styleUrls: ['./searchfun.component.css']
})
export class SearchfunComponent implements AfterViewInit {

  title = 'rxjs';
  searchResults: Search[]
  searchTerm: any;

  constructor(private _searchfunservice: SearchfunService, private titleservice: Title) {titleservice.setTitle('Searchfun')}

  ngAfterViewInit() {
    this._searchfunservice.getSearches().subscribe((res) => {
      console.log(res);
      this.searchResults = res;
      this.data = res;
    });

    
  }

  data: Search[];

  onChange() {
    console.log(this.searchTerm);
    if (this.searchTerm.length > 0) {
      this.data = [];

      this.searchResults.forEach((e) => {
        if (
          e.username.includes(this.searchTerm.trim().toLowerCase()) ||
          e.email.includes(this.searchTerm.trim().toLowerCase())
        ) {
          this.data.push(e);
        }
      });
      console.log(this.data);
    } else {
      this.data = this.searchResults;
    }
  }

}
