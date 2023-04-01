import React from 'react'
import { Button, ButtonGroup } from "react-bootstrap";

const AssetListItem = ({assets,deleteOneAsset}) => {
    const deleteHandler=(el)=>{
        if (window.confirm(`Are you sure you want to delete ${el.name}?`))
        deleteOneAsset(el.id)
    }
    const assetsList = assets.map((el,idx)=>  <tr key={el.id}>
  <td>#{++idx}</td>
  <td>{el.name}</td>
  <td>{el.category}</td>
  <td>{el.quantity}</td>
  <td>{el.component}</td>
  <td>{el.location}</td>
  <td>
    <ButtonGroup aria-label="Basic example">
      <Button>Edit</Button>
      <Button variant="danger" onClick={()=>deleteHandler(el)}>Delete</Button>
    </ButtonGroup>
  </td>
</tr>)
  return (
    <>
      {assetsList}
    </>
  )
}

export default AssetListItem
