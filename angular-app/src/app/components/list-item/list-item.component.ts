import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit, OnChanges {
  @Input()
  item: any;

  constructor() { }

  ngOnInit(): void {
    console.log('list item init');
  }

  ngOnChanges() {
    console.log('list item changes');
  }

}
