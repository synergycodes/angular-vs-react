import { ChangeDetectionStrategy, Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { DatasetSize } from '../../enums/dataset-size.enum';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit, OnChanges {
  @Output()
  makeAllBackend: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  addItem: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  removeItem: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  numberOfItemsChanged: EventEmitter<any> = new EventEmitter<any>();

  DatasetSizes = DatasetSize;

  handleNumberOfItemsChange(event: any) {
    this.numberOfItemsChanged.emit(event.target.value)
  }

  ngOnInit(): void {
    console.log('footer init');
  }

  ngOnChanges() {
    console.log('footer changes');
  }
}
