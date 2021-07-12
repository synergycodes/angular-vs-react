import React from 'react'
import { ListItem } from '../listItem/listItem'
import {Employee} from '../../../../interfaces/employee.interface'
interface Props  {
    data: Employee[]
}

export const ListContainer:React.FC<Props> = ({data}) => {
   
   return (<div className="app-list-container">
     {data.map(el => {
      return (<ListItem  employee={el}></ListItem>)
     })}
</div>)

}