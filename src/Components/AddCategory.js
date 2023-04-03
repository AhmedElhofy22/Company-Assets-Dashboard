import React,{useState} from 'react'
import Popup from "./Popup";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { insertCategory } from '../Store/categorySlice';


const AddCategory = ({onClose}) => {
    const closeHandler=()=>{
        onClose()
      }
      const [name, setName] = useState("");
      const dispatch = useDispatch()
      const nameHandler = (event) => {
        setName(event.target.value);
      };
      const submitHandler = (event) => {
        event.preventDefault();
        const id = Math.floor(Math.random() * 500)
        dispatch(insertCategory({id,name})).unwrap().then(()=>{
        }).catch((error)=>{
           console.log(error);
        })
        };
  return (
    <Popup onClose={closeHandler} >
      <form  onSubmit={submitHandler} className="form">
      <Modal.Header  >
      <Modal.Title>Add Category</Modal.Title>
      </Modal.Header>
        <div className="mb-3">
          <label htmlFor="name" className="form-label d-flex m-0 p-0 "
          style={{ marginLeft: "0px" }}>Name</label>
          <input
            type="text"
            id="name"
            value={name}
            required
            onChange={nameHandler}
            placeholder="Name"
          />
        </div>
        <Modal.Footer>
            <Button
              className="btn gradient-custom-4 border-0"
              type='submit'
            >
              Add Category
            </Button>
            <Button variant="danger" className="btn gradient-custom-4 border-0" onClick={closeHandler}>Cancel</Button>
          </Modal.Footer>
      </form>
      </Popup>
  )
}

export default AddCategory
