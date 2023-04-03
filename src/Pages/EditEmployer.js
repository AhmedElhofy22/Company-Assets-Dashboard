import React,{useState,useEffect} from 'react'
import { Button, Modal } from "react-bootstrap";
import useEmployerDetail from '../Hooks/useEmployerDetail';
import { useDispatch } from 'react-redux';
import { editEmployer } from '../Store/employSlice';
import { useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';

const EditEmployer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
   const {loading,error,employer} = useEmployerDetail();
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [number, setNumber] = useState("");
   const [address, setAddress] = useState("");
   useEffect(()=>{
    if(employer){
        setName(employer?.name);
        setEmail(employer?.email);
        setNumber(employer?.number);
        setAddress(employer?.address);
    }
  },[employer])
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
        dispatch(editEmployer({id:employer.id, name, email, number, address})).unwrap().then(()=>navigate('/home/employees'));
        };
  return (
    
    <Loading loading={loading} error={error}>
    <form  onSubmit={submitHandler} className="form">
    <Modal.Header  >
    <Modal.Title>Edit Employer</Modal.Title>
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
            Edit Employer
          </Button>
          <Button variant="danger" className="btn gradient-custom-4 border-0" onClick={()=>navigate('/home/employees')}>Cancel</Button>
        </Modal.Footer>
    </form>
      </Loading>
      
  )
}

export default EditEmployer;
