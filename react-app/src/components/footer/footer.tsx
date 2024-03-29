import React from 'react';
import { dataMap } from '../../assets/data';
import {DatasetSize} from  '../../enums/dataset-size.enum';
import { JobTitle } from '../../enums/job-title.enum';
import { Employee } from '../../interfaces/employee.interface';
import './footer.css';
import {v4 as uuid} from 'uuid'
interface Props {
  data: Employee[]
  setData: (data: Employee[]) => any,
}

const makeAllBackend = (data:Employee[]) => {
  return data.map(el => ({...el, jobTitle: JobTitle.BackendDev}))
}

const addItem = (data:Employee[]) => {
  return [...data, {...data[0], key: uuid()}]
}

const removeItem = (data:Employee[]) => {

  return data.slice(0, -1)
}

export const Footer:React.FC<Props> =  ({setData, data}) => {


return(
<div className="app-footer">
  <button onClick={() => setData(makeAllBackend(data))}>Make all backend</button>
  <button onClick={() => setData(addItem(data))}>Add item</button>
  <button onClick={() => setData(removeItem(data))}>Remove item</button>
  <select onChange={(e) => setData(dataMap[e.currentTarget.value as DatasetSize])}  >
    <option>{ DatasetSize.None }</option>
    <option>{ DatasetSize.TenItems }</option>
    <option>{ DatasetSize.OneHundredItems }</option>
    <option>{ DatasetSize.OneThousandItems }</option>
    <option>{ DatasetSize.TenThousandsItems }</option>
    <option>{ DatasetSize.TwentyThousandsItems }</option>
  </select>
</div>
)
}