import React from 'react'
import { Employee } from '../../../../interfaces/employee.interface'
import './listItem.css'
interface Props {
    employee: Employee
}
export const ListItem:React.FC<Props> = ({employee}) => {
    
const {age,jobTitle,name} = employee;

return (
    <div className={`item ${jobTitle}`}>
        <strong>{name }</strong><br/>
        <span>Position: { jobTitle }</span>&nbsp;---&nbsp;<span>Age: {age }</span>
    </div>
)}