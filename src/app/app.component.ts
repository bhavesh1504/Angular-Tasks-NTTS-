import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projects';
  constructor(private titleservice : Title, private meta : Meta){
    titleservice.setTitle('Projects');
    meta.addTag({name: 'description'})
  }
}
