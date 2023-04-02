import React from 'react'
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';

const EmployeesListItem = ({employees,deleteOneEmployer}) => {
    const deleteEmployerHandler=(el)=>{
        if (window.confirm(`Are you sure you want to delete ${el.name}?`))
        deleteOneEmployer(el.id)
    }
    const employeesList = employees.map((el,idx)=>  <tr key={el.id}>
  <td>#{++idx}</td>
  <Link style={{textDecoration: 'none'}} to={`/home/employees/${el.id}`}><td>{el.name}</td></Link>
  <td>{el.email}</td>
  <td>{el.number}</td>
  <td>{el.address}</td>
  <td>
    <ButtonGroup aria-label="Basic example">
      <Button>Edit</Button>
      <Button variant="danger" onClick={()=>deleteEmployerHandler(el)}>Delete</Button>
    </ButtonGroup>
  </td>
</tr>)
  return (
    <>
      {employeesList}
    </>
  )
}

export default EmployeesListItem
