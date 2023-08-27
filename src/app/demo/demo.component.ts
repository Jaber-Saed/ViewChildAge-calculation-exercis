import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  constructor (){}

  ngOnInit(): void {

  }

  sayHelo(){
    console.log(`Hello from demo component class!`)
  }
}
