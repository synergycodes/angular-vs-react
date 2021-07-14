import { Component, OnChanges, OnInit } from '@angular/core';
import { Employee } from './interfaces/employee.interface';
import { JobTitle } from './enums/job-title.enum';
import { DataService } from './services/data.service';
import { DatasetSize } from './enums/dataset-size.enum';
import { v4 as uuid } from 'uuid'

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
    this.items = [...this.items, { ...this.items[0], key: uuid() }];
  }

  removeItem() {
    this.items = this.items.slice(0, -1);
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
