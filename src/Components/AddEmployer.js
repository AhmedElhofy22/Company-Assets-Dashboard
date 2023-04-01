import React,{useState} from 'react'
import Popup from "./Popup";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { insertEmployer } from '../Store/employSlice';


const AddEmployer = ({onClose}) => {
    const closeHandler=()=>{
        onClose()
      }
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [number, setNumber] = useState("");
      const [address, setAddress] = useState("");
      const dispatch = useDispatch()
      const nameHandler = (event) => {
        setName(event.target.value);
      };
      const emailHandler = (event) => {
        setEmail(event.target.value);
      };
      const numberHandler = (event) => {
        setNumber(event.target.value);
      };
      const addressHandler = (event) => {
        setAddress(event.target.value);
      };
      const submitHandler = (event) => {
        event.preventDefault();
        const id = Math.floor(Math.random() * 500)
        dispatch(insertEmployer({id,name,email,number,address})).unwrap().then(()=>{
        }).catch((error)=>{
           console.log(error);
        })
        
        };
  return (
    <Popup onClose={closeHandler} >
      <form  onSubmit={submitHandler} className="form">
      <Modal.Header  >
      <Modal.Title>Add Employer</Modal.Title>
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
        <div className="mb-3">
          <label htmlFor="category" className="form-label d-flex m-0 p-0 ">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            required
            onChange={emailHandler}
            placeholder="Email Address"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label d-flex m-0 p-0 ">Phone Number</label>
          <input
            type="text"
            id="number"
            value={number}
            required
            onChange={numberHandler}
            placeholder="Phone Number"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="component" className="form-label d-flex m-0 p-0 ">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            required
            onChange={addressHandler}
            placeholder="Address"
          />
        </div>
        <Modal.Footer>
            <Button
              className="btn gradient-custom-4 border-0"
              type='submit'
            >
              Add Employer
            </Button>
            <Button variant="danger" className="btn gradient-custom-4 border-0" onClick={closeHandler}>Cancel</Button>
          </Modal.Footer>
      </form>
      </Popup>
  )
}

export default AddEmployer;
