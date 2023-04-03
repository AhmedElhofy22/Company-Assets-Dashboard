import React from 'react'
import { Button, ButtonGroup } from "react-bootstrap";
import { Link , useNavigate } from 'react-router-dom';

const EmployeesListItem = ({employees,deleteOneEmployer}) => {
  const navigate = useNavigate()
    const deleteEmployerHandler=(el)=>{
        if (window.confirm(`Are you sure you want to delete ${el.name}?`))
        deleteOneEmployer(el.id)
    }
    const employeesList = employees.map((el,idx)=>  <tr key={el.id}>
  <td>#{++idx}</td>
  <Link style={{textDecoration: 'none'}} to={`/employees/${el.id}`}><td>{el.name}</td></Link>
  <td>{el.email}</td>
  <td>{el.number}</td>
  <td>{el.address}</td>
  <td>
    <ButtonGroup aria-label="Basic example">
      <Button onClick={() => navigate(`/employees/${el.id}/edit`)}>Edit</Button>
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
