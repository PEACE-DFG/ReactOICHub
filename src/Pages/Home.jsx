import Index from '../Component/Index'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
  const [products,setProducts]=useState([]);
  function fetchProducts(){
    axios.get('https://dummyjson.com/products')
    .then(res=>{
      console.log(res.data.products)
        setProducts(res.data.products)
      })
  }useEffect(()=>{
    fetchProducts()
  },[]);

  return (
    <div>
      <div className="container">
        <div>
          {
            (products.length>0)?
            products.map((value,index)=>{
              return(
                <div key={index}>
                   <Index {...value}/>

                  </div>
              )
            }):
            <>
            <h1>Products is Loading...</h1>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Home