import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {
  @Output()
  makeAllBackend: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  addItem: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  removeItem: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    console.log('footer init');
  }

  ngOnChanges() {
    console.log('footer changes');
  }

}
