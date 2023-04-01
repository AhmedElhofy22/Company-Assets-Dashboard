import React from 'react'
import { Button, ButtonGroup } from "react-bootstrap";

const EmployeesListItem = ({employees,deleteOneEmployer}) => {
    const deleteEmployerHandler=(el)=>{
        if (window.confirm(`Are you sure you want to delete ${el.name}?`))
        deleteOneEmployer(el.id)
    }
    const employeesList = employees.map((el,idx)=>  <tr key={el.id}>
  <td>#{++idx}</td>
  <td>{el.name}</td>
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
