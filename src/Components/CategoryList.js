import React, {useState} from 'react'
import { Table, Button } from "react-bootstrap";
import CategoryListItem from './CategoryListItem';
import AddCategory from './AddCategory';

const CategoryList = ({categories,deleteOneCategory}) => {
  const [popup , setPopup] = useState(false)
  const setIsVisible = ()=>setPopup(v=>!v)
  return (
   <>
    <div className="d-flex justify-content-between">
      <h1>All Categories</h1>
      <Button variant="success" onClick={setIsVisible}>Add Category</Button>
      {popup? <AddCategory onClose={()=>setPopup(false)}/> :null}
    </div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th style={{ width: "10%" }}>Name</th>
          <th style={{ width: "10%" }}></th>
        </tr>
      </thead>
      <tbody>
        <CategoryListItem categories={categories} deleteOneCategory={deleteOneCategory} />
       
      </tbody>
    </Table>
    </>
  )
}

export default CategoryList;
