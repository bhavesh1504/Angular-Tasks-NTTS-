import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from '../userinterface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() customer:Customer = new Customer();
  @Output() customerChange:EventEmitter<Customer> = new EventEmitter<Customer>();

  constructor() { }

  ngOnInit(): void {
  }

  update(){
    this.customerChange.emit(this.customer);
  }

}
