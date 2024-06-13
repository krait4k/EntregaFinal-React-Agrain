import React from 'react'
import ItemListContainerComponent from '../Components/ItemListContainerComponent/ItemListContainerComponent'
import { useParams } from 'react-router-dom'
import { useProductById } from '../hooks/useProductById'
import { useProductsByCategory } from '../hooks/useProductsByCategory'

const Category = () => {
  const {id} = useParams()

  const {products} = useProductsByCategory(id)
  return <ItemListContainerComponent products={products}/>
}

export default Category