import  {useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { fetchEmployer } from '../Store/employSlice'
import { useParams } from 'react-router-dom'

const useEmployerDetail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {loading,error,employer} = useSelector((state)=>state.employees)
    useEffect(()=>{
        dispatch(fetchEmployer(id))
    },[dispatch,id]) 
  return {
      loading,error,employer
  }
}

export default useEmployerDetail; 