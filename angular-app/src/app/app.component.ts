import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  items = [
    { name: 'Dawid', jobTitle: 'frontend-dev' },
    { name: 'Kacper', jobTitle: 'frontend-dev' },
    { name: 'Magda', jobTitle: 'hr-expert' },
  ];

  makeAllBackend() {
    this.items = this.items.map(item => ({ ...item, jobTitle: 'backend-dev'}));
  }

  addItem() {
    this.items.push({ name: 'Krzysio', jobTitle: 'backend-dev' });
  }

  removeItem() {
    this.items.splice(-1, 1);
  }

  ngOnInit() {
    console.log('app init');
  }

  ngOnChanges() {
    console.log('app changes');
  }
}
