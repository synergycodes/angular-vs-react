import { Component, OnChanges, OnInit } from '@angular/core';
import { Employee } from './interfaces/employee.interface';
import { JobTitle } from './enums/job-title.enum';
import { DataService } from './services/data.service';
import { DatasetSize } from './enums/dataset-size.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnChanges {
  items: Employee[] = this.dataService.getDataset(DatasetSize.None);

  constructor(private dataService: DataService) {
  }

  makeAllBackend() {
    this.items = this.items.map(item => ({ ...item, jobTitle: JobTitle.BackendDev}));
  }

  addItem() {
    this.items.push(this.items[0]);
  }

  removeItem() {
    this.items.splice(-1, 1);
  }

  changeNumberOfItems(datasetSize: DatasetSize) {
    this.items = this.dataService.getDataset(datasetSize);
  }

  ngOnInit() {
    console.log('app init');
  }

  ngOnChanges() {
    console.log('app changes');
  }
}
