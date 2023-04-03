import React from 'react'
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CategoryListItem = ({categories,deleteOneCategory}) => {
    const navigate = useNavigate()
    const deleteHandler=(el)=>{
        if (window.confirm(`Are you sure you want to delete ${el.name}?`))
        deleteOneCategory(el.id)
    }
    const categoriesList = categories.map((el,idx)=>  <tr key={el.id}>
  <td>#{++idx}</td>
  <Link style={{textDecoration: 'none'}} to={`/categories/assets/${el.id}`}><td>{el.name}</td></Link>
 
  <td>
    <ButtonGroup aria-label="Basic example">
      <Button onClick={() => navigate(`/categories/assets/${el.id}/edit`)} >Edit</Button>
      <Button variant="danger" onClick={()=>deleteHandler(el)}>Delete</Button>
    </ButtonGroup>
  </td>
</tr>)
  return (
    <>
      {categoriesList}
     
    </>
  )
}

export default CategoryListItem
