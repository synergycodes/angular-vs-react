import { Injectable } from '@angular/core';
import { DatasetSize } from '../enums/dataset-size.enum';
import { Employee } from '../interfaces/employee.interface';
import {
  oneHundredItems,
  oneThousandItems,
  tenItems,
  tenThousandsItems,
  twentyThousandsItems
} from '../../assets/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  dataCountMap: { [key: string]: Employee[] } = {
    [DatasetSize.TenItems]: tenItems,
    [DatasetSize.OneHundredItems]: oneHundredItems,
    [DatasetSize.OneThousandItems]: oneThousandItems,
    [DatasetSize.TenThousandsItems]: tenThousandsItems,
    [DatasetSize.TwentyThousandsItems]: twentyThousandsItems,
  };


  getDataset(size: DatasetSize) {
    return this.dataCountMap[size];
  }
}
