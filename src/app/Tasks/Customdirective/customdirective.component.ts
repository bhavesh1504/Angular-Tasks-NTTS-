import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-customdirective',
  templateUrl: './customdirective.component.html',
  styleUrls: ['./customdirective.component.css']
})
export class CustomdirectiveComponent implements OnInit {

  constructor(private titleservice : Title) {titleservice.setTitle('Customdirective') }

  ngOnInit(): void {
  }

}
