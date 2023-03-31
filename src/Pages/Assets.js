import React, {useEffect,useCallback} from 'react'


import { useDispatch , useSelector } from 'react-redux';
import { fetchAssets, deleteAsset } from '../Store/assetSlice';
import AssetList from '../Components/AssetList';
import Loading from '../Components/Loading';

const Assets = () => {
  const dispatch = useDispatch();
  const {assets,loading,error} = useSelector((state)=>state.assets)
  useEffect(()=>{
    dispatch(fetchAssets())
  },[dispatch])

  const deleteOneAsset = useCallback((id)=>dispatch(deleteAsset(id)),[dispatch])
 
  return (
    <Loading loading={loading} error={error}>
      <AssetList assets={assets} deleteOneAsset={deleteOneAsset}/>
    </Loading>
  );
};

export default Assets;