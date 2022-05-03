import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleProducts } from '../redux/actions/products'

const ProductDetails = () => {
    const dispatch = useDispatch()
    const {single_product} = useSelector(state=>state.singleProduct)
    console.log(single_product, "single")
    const { id } = useParams()

    useEffect(()=>{
        dispatch(getSingleProducts(id))
    },[dispatch,id])
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails