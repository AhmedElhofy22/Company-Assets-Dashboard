import React, {useEffect,useCallback} from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { fetchCategories, deleteCategory } from '../Store/categorySlice';
import CategoryList from '../Components/CategoryList';
import Loading from '../Components/Loading';


const Categories = () => {
  const dispatch = useDispatch();
  const {categories,loading,error} = useSelector((state)=>state.categories)
  useEffect(()=>{
    dispatch(fetchCategories())
  },[dispatch])

  const deleteOneCategory = useCallback((id)=>dispatch(deleteCategory(id)),[dispatch])
  
 
  return (
    <Loading loading={loading} error={error}>
      <CategoryList categories={categories} deleteOneCategory={deleteOneCategory} />
    </Loading>
  );
};

export default Categories;