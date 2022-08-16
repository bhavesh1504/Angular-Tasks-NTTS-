import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-foreach',
  templateUrl: './foreach.component.html',
  styleUrls: ['./foreach.component.css']
})
export class ForeachComponent implements OnInit {

  title = 'foreachloop';

  ReadMore:boolean = true;

  visible:boolean = false;


  
  data = [
  {id: 1, name:'hello'},
  {id: 2, name:'bird'},
  {id: 3, name:'table'},
  {id: 4, name:'football'},
  {id: 5, name:'pipe'},
  {id: 6, name:'code'},
  ]
  data1:Array<any> = [];

  constructor(private titleservice:Title){titleservice.setTitle('Foreach')}

  ngOnInit(){

  }   

  addNew(){
    if(!this.ReadMore || this.ReadMore){
      this.data1 = [];
    }
    this.ReadMore = !this.ReadMore;
    this.visible = !this.visible;
    

    this.data.forEach(e =>{
      
      this.data1.push({id:e.id,name:e.name.substr(0,1).toUpperCase() + e.name.slice(1).toLowerCase()})

      
    })

    console.log(this.data1);
    
  }

  }


