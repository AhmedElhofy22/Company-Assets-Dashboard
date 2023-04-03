import React from 'react'
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AssetListItem = ({assets,deleteOneAsset}) => {
    const navigate = useNavigate()
    const deleteHandler=(el)=>{
        if (window.confirm(`Are you sure you want to delete ${el.name}?`))
        deleteOneAsset(el.id)
    }
    const assetsList = assets.map((el,idx)=>  <tr key={el.id}>
  <td>#{++idx}</td>
  <Link style={{textDecoration: 'none'}} to={`/home/categories/assets/${el.id}`}><td>{el.name}</td></Link>
  <td>{el.category}</td>
  <td>{el.quantity}</td>
  <td>{el.component}</td>
  <td>{el.location}</td>
  <td>
    <ButtonGroup aria-label="Basic example">
      <Button onClick={() => navigate(`/home/categories/assets/${el.id}/edit`)} >Edit</Button>
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
