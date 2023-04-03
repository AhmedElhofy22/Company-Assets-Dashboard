import React,{useState,useEffect} from 'react'
import { Button, Modal } from "react-bootstrap";
import useAssetDetail from '../Hooks/useAssetDetail';
import { useDispatch } from 'react-redux';
import { editAsset } from '../Store/assetSlice';
import { useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';

const EditAsset = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
   const {loading,error,asset} = useAssetDetail();
      const [name, setName] = useState("");
      const [category, setCategory] = useState("");
      const [quantity, setQuantity] = useState("");
      const [component, setComponent] = useState("");
      const [location, setLocation] = useState("");
      useEffect(()=>{
        if(asset && !name && !category && !quantity && !component && !location){
            setName(asset?.name);
            setCategory(asset?.category);
            setQuantity(asset?.quantity);
            setComponent(asset?.component);
            setLocation(asset?.location);
        }
      },[asset,name,category,quantity,component,location])
      const nameHandler = (event) => {
        setName(event.target.value);
      };
      const categoryHandler = (event) => {
        setCategory(event.target.value);
      };
      const quantityHandler = (event) => {
        setQuantity(event.target.value);
      };
      const componentHandler = (event) => {
        setComponent(event.target.value);
      };
      const locationHandler = (event) => {
        setLocation(event.target.value);
      };
    
      const submitHandler = (event) => {
        event.preventDefault();
        dispatch(editAsset({id:asset.id, name, category, quantity, component, location})).unwrap().then(()=>navigate('/home/categories/assets'));
        
        };
  return (
    
    <Loading loading={loading} error={error}>
      <form  onSubmit={submitHandler} className="form">
      <Modal.Header  >
      <Modal.Title>Edit Asset</Modal.Title>
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
          <label htmlFor="category" className="form-label d-flex m-0 p-0 ">Category</label>
          <input
            type="text"
            id="category"
            value={category}
            required
            onChange={categoryHandler}
            placeholder="Category"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label d-flex m-0 p-0 ">Quantity</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            required
            onChange={quantityHandler}
            placeholder="Quantity"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="component" className="form-label d-flex m-0 p-0 ">Component</label>
          <input
            type="text"
            id="component"
            value={component}
            required
            onChange={componentHandler}
            placeholder="Component"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label d-flex m-0 p-0 ">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            required
            onChange={locationHandler}
            placeholder="Location"
          />
        </div>
        <Modal.Footer>
         
            <Button
              className="btn gradient-custom-4 border-0"
              type='submit'
            >
              Edit Asset
            </Button>
            
            <Button variant="danger" className="btn gradient-custom-4 border-0" onClick={()=>navigate('/home/categories/assets')}>Cancel</Button>
          </Modal.Footer>
      </form>
      </Loading>
      
  )
}

export default EditAsset;
