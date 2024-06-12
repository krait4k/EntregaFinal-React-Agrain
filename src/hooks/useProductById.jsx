import React from 'react'
import { getProductById } from '../services/products'

export const useProductById = () => {
  const [product, setProducts] = React.useState({})

  React.useEffect(() => {
    getProductById(id)
        .then((res) => {
            setProducts(res.data)
        })
        .catch((error) => {
            console.error(error)
        })
  }, [])
  return { product }
}