import React from 'react'
import Loading from '../Components/Loading'
import useEmployerDetail from '../Hooks/useEmployerDetail'
import { Table } from 'react-bootstrap'

const EmployerDetail = () => {
   const {loading,error,employer} = useEmployerDetail()

  return (
    <div>
     <Loading loading={loading} error={error}>
     <h1>{employer?.name}</h1>
     <Table striped bordered hover>
     <thead>
       <tr>
       <th style={{ width: "10%" }}>Name</th>
       <th style={{ width: "10%" }}>Email</th>
       <th style={{ width: "10%" }}>Number</th>
       <th style={{ width: "10%" }}>Address</th>
       </tr>
     </thead>
     <tbody>
     <tr>
     <td>{employer?.name}</td>
     <td>{employer?.email}</td>
     <td>{employer?.number}</td>
     <td>{employer?.address}</td>
     </tr>  
     </tbody>
   </Table>
      </Loading> 
    </div>
  )
}

export default EmployerDetail;
