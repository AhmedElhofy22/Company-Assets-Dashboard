import React from 'react'
import Loading from '../Components/Loading'
import useAssetDetail from '../Hooks/useAssetDetail'
import { Table } from 'react-bootstrap'

const AssetDetail = () => {
   const {loading,error,asset} = useAssetDetail()

  return (
    <div>
     <Loading loading={loading} error={error}>
     <h1>{asset?.name}</h1>
     <Table striped bordered hover>
     <thead>
       <tr>
       <th style={{ width: "10%" }}>Name</th>
       <th style={{ width: "10%" }}>Category</th>
       <th style={{ width: "10%" }}>Quantity</th>
       <th style={{ width: "10%" }}>Component</th>
       <th style={{ width: "80%" }}>Location</th>
       </tr>
     </thead>
     <tbody>
     <tr>
     <td>{asset?.name}</td>
     <td>{asset?.category}</td>
     <td>{asset?.quantity}</td>
     <td>{asset?.component}</td>
     <td>{asset?.location}</td>
     </tr>  
     </tbody>
   </Table>
      </Loading> 
    </div>
  )
}

export default AssetDetail;
