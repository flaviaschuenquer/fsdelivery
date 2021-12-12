import { useEffect, useState } from 'react'
import { fetchProducts } from '../api'
import Footer from '../Footer'
import OrderLocation from './OrderLocation'
// import OrderSummary from './OrderSummary'
import ProductsList from './ProductsList'
import StepsHeader from './StepsHeader'
import './styles.css'
import { OrderLocationdata, Product } from './types'

function Orders() {
  const [products, setProducts] = useState<Product[]>([])
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>()
  const [SelectedProducts, setSelectedProducts] = useState<Product[]>([])

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
  }, [])

  // const handleSelectProduct = (product: Product) => {
  //   const isAlreadySelected =

  //   if (isAlreadySelected) {
  //     const selected = SelectedProducts.filter(item => item.id !== product.id)
  //     setSelectedProducts(selected)
  //   } else {
  //     setSelectedProducts(previous => [...previous, product])
  //   }
  // }

  return (
    <>
      <div className="orders-container">
        <StepsHeader />
        <ProductsList
          products={products}
          // onSelectProduct={handleSelectProduct}
        />
        <OrderLocation
          onChangeLocation={location => setOrderLocation(location)}
        />
        {/* <OrderSummary /> */}
      </div>
      <Footer />
    </>
  )
}
export default Orders
