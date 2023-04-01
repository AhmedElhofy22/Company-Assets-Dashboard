import React, {memo,useState} from 'react'
import { Table, Button } from "react-bootstrap";
import AddEmployer from './AddEmployer';
import EmployeesListItem from './EmployeesListItem';

const EmployeesList = ({employees,deleteOneEmployer}) => {
  const [popup , setPopup] = useState(false)
  const setIsVisible = ()=>setPopup(v=>!v)
  return (
   <>
    <div className="d-flex justify-content-between">
      <h1>All Employees</h1>
      <Button variant="success" onClick={setIsVisible}>Add Employer</Button>
      {popup? <AddEmployer onClose={()=>setPopup(false)}/> :null}
    </div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th style={{ width: "10%" }}>Name</th>
          <th style={{ width: "10%" }}>Email</th>
          <th style={{ width: "10%" }}>Number</th>
          <th style={{ width: "10%" }}>Address</th>
          <th style={{ width: "10%" }}></th>
        </tr>
      </thead>
      <tbody>
        <EmployeesListItem employees={employees} deleteOneEmployer={deleteOneEmployer}/>
      </tbody>
    </Table>
    </>
  )
}

export default memo(EmployeesList);