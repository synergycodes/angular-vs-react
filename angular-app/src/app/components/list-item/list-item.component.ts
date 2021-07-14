import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent implements OnInit, OnChanges {
  @Input()
  item: Employee | null = null;

  ngOnInit(): void {
    console.log('list item init');
  }

  ngOnChanges() {
    console.log('list item changes');
  }
}
