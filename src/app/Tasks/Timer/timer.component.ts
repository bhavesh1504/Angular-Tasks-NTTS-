import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit,OnDestroy,AfterViewInit {


  timeLeft: number = 60;
  timer1:any = 0;
  timer2:any;
  pOpened: boolean = false;
  constructor(private titleservice: Title) { titleservice.setTitle('Timer')}

  ngOnInit(): void {
  this.timer1= setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)
   this.timer2= setInterval(() => {
          this.pOpened = !this.pOpened;
        
    },6000);

}

ngAfterViewInit(){

}
ngOnDestroy(){
    clearInterval(this.timer1);
    
  
      
}


}
