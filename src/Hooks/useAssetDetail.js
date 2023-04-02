import  {useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { fetchAsset } from '../Store/assetSlice'
import { useParams } from 'react-router-dom'

const useAssetDetail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {loading,error,asset} = useSelector((state)=>state.assets)
    useEffect(()=>{
        dispatch(fetchAsset(id))
    },[dispatch,id]) 
  return {
      loading,error,asset
  }
}

export default useAssetDetail; 
