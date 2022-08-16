import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SearchfunService } from '../Services/searchfun.service';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {

  users:any;

  constructor(private _searchfunservice: SearchfunService, private titleservice : Title) {_searchfunservice.getSearches().subscribe((data)=>this.users=data), titleservice.setTitle('Displaydata')}

  ngOnInit(): void {
  }

  

}
