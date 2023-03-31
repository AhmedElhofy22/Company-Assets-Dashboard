import React, {memo} from 'react'
import { Table } from "react-bootstrap";
import AssetListItem from './AssetListItem';

const AssetList = ({assets,deleteOneAsset}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th style={{ width: "10%" }}>Name</th>
          <th style={{ width: "10%" }}>Category</th>
          <th style={{ width: "80%" }}>Location</th>
          <th style={{ width: "10%" }}></th>
        </tr>
      </thead>
      <tbody>
        <AssetListItem assets={assets} deleteOneAsset={deleteOneAsset}/>
      </tbody>
    </Table>
  )
}

export default memo(AssetList)
