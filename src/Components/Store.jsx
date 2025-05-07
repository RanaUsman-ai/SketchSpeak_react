import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
//import { NavLink} from 'react-router';
import { NavLink } from 'react-router-dom';

import './Store.css';

const Shopping = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  let isMounted = true;
  useEffect(() => {
    let isMounted = true;
  
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products/" );
        const products = await response.json();
        if (isMounted) {
          setData(products);
          setFilter(products);
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };
  
    getProducts();
  
    return () => {
      isMounted = false;
    };
  }, []);
  
const Loading=() =>{
  return(
    <>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div>
          <Skeleton height={350}/>
        </div>
        <div>
          <Skeleton height={350}/>
        </div>

    </>
  )
  
}
const filterProduct = (cat) =>{
  const updatelist = data.filter((x) => x.category === cat );
  setFilter(updatelist);
}
const ShowProducts = () => {
  return (
    <>
      {filter.map((product) => (
        <div className="col-md-3 mb-4" key={product.id}>
          <div className="card h-100 text-center p-4">
            <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
            <div className="card-body">
              <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
              <p className="card-text fw-bold">${product.price}</p>
              <NavLink to={`/products/${product.id}`}><button className='btn btn-outline-dark'>Buy Now</button></NavLink>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

  return (
    <div style={{ marginTop: '120px', padding: '1rem' }}>
    <div className='container my-5 py-5'>
      <div className='row'>
        <div className='col-12 mb-5'>
          <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
          <hr />
        </div>
      </div>
  
      {/* BUTTONS row */}
      <div className='row'>
        <div className="buttons d-flex justify-content-center mb-4">
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelary</button>
          {/* <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button> */}
        </div>
      </div>
  
      {/* PRODUCTS GRID */}
      <div className='row justify-content-center'>
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  </div>
  
  );
};

export default Shopping;
