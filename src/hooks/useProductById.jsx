import React from 'react'
import { getProductById } from '../services/products'

export const useProductById = (id) => {
  const [product, setProducts] = React.useState({})

  React.useEffect(() => {
    getProductById(id)
        .then((res) => {
            setProducts(res.data)
        })
        .catch((error) => {
            console.error(error)
        })
  }, [id])
  return { product }
}