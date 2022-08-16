import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Customer } from './userinterface';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  cust:any;

  customers: Customer[] = [
 
    {customerNo: 1, name: 'Rahul Dravid', address: '', city: 'Banglore', state: 'Karnataka', country: 'India'},
    {customerNo: 2, name: 'Sachin Tendulkar', address: '', city: 'Mumbai', state: 'Maharastra', country: 'India'},
    {customerNo: 3, name: 'Saurav Ganguly', address: '', city: 'Kolkata', state: 'West Bengal', country: 'India'},
    {customerNo: 4, name: 'Mahendra Singh Dhoni', address: '', city: 'Ranchi', state: 'Bihar', country: 'India'},
    {customerNo: 5, name: 'Virat Kohli', address: '', city: 'Delhi', state: 'Delhi', country: 'India'},
 
  ]

  selectedCustomer:Customer = new Customer();

  constructor(private titleservice : Title) {titleservice.setTitle('parent') }

  ngOnInit(): void {
  }

  showDetails(customer:Customer){
    this.selectedCustomer = Object.assign({},customer)
  }

  update(customer:Customer){
    console.log(customer);
    this.cust = this.customers.find(e => e.customerNo==customer.customerNo);
    Object.assign(this.cust,customer);
    alert("Customer Saved");
  }

  

  

}
