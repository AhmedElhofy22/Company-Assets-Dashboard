import React, {useEffect} from 'react'

import { Table, Button, ButtonGroup } from "react-bootstrap";
import { useDispatch , useSelector } from 'react-redux';
import { fetchAssets } from '../Store/assetSlice';

const Assets = () => {
  const dispatch = useDispatch();
  const {assets,loading,error} = useSelector((state)=>state.assets)
  useEffect(()=>{
    dispatch(fetchAssets())
  },[dispatch])
 
  const assetsList = assets.map((asset,idx)=>  <tr key={asset.id}>
  <td>#{++idx}</td>
  <td>{asset.name}</td>
  <td>{asset.categoryId}</td>
  <td>{asset.location}</td>
  <td>
    <ButtonGroup aria-label="Basic example">
      <Button>Edit</Button>
      <Button variant="danger">Delete</Button>
      <Button variant="success">Add</Button>
    </ButtonGroup>
  </td>
</tr>)
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
        {loading ? (
          <tr>
            <td colSpan={3}>Loading...</td>
          </tr>
        ) : error ?  (
          <tr>
            <td colSpan={3}>{error}</td>
          </tr>) : (
          assetsList
        )}
      </tbody>
    </Table>
  );
};

export default Assets;