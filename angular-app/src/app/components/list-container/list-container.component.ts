import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListContainerComponent implements OnInit, OnChanges {
  @Input()
  items: Employee[] = [];

  ngOnInit(): void {
    console.log('container init');
  }

  ngOnChanges() {
    console.log('container changes');
  }

  identify(index: number, item: Employee) {
    return item.key;
  }
}
