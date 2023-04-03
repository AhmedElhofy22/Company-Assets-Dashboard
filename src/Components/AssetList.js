import React, {memo,useState} from 'react'
import { Table, Button } from "react-bootstrap";
import AddAsset from './AddAsset';
import AssetListItem from './AssetListItem';

const AssetList = ({assets,deleteOneAsset}) => {
  const [popup , setPopup] = useState(false)
  const setIsVisible = ()=>setPopup(v=>!v)
  return (
   <>
    <div className="d-flex justify-content-between">
      <h1>All Assets</h1>
      <Button variant="success" onClick={setIsVisible}>Add Asset</Button>
      {popup? <AddAsset onClose={()=>setPopup(false)}/> :null}
    </div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th style={{ width: "10%" }}>Name</th>
          <th style={{ width: "10%" }}>Category</th>
          <th style={{ width: "10%" }}>Quantity</th>
          <th style={{ width: "10%" }}>Component</th>
          <th style={{ width: "80%" }}>Location</th>
          <th style={{ width: "10%" }}></th>
        </tr>
      </thead>
      <tbody>
        <AssetListItem assets={assets} deleteOneAsset={deleteOneAsset} />
      </tbody>
    </Table>
    </>
  )
}

export default memo(AssetList);
