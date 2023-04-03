import React, {useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { fetchEmployees, deleteEmployer } from '../Store/employSlice';
import EmployeesList from '../Components/EmployeesList';
import Loading from '../Components/Loading';

const Employees = () => {
  const dispatch = useDispatch();
  const {employees,loading,error} = useSelector((state)=>state.employees)
  useEffect(()=>{
    dispatch(fetchEmployees())
  },[dispatch])

  const deleteOneEmployer = (id)=>dispatch(deleteEmployer(id))
 
  return (
    <Loading loading={loading} error={error}>
      <EmployeesList employees={employees} deleteOneEmployer={deleteOneEmployer}/>
    </Loading>
  );
};

export default Employees;