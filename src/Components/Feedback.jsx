import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import './Feedback.css';
import img12 from "./images/5.jpg";

const FeedbackReviews = () => {
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [feedbacks, setFeedbacks] = useState([]);
  const [loadingFeedback, setLoadingFeedback] = useState(true);

  // Fetch all products once
  useEffect(() => {
    const fetchProducts = async () => {
      setLoadingProducts(true);
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
        setLoadingProducts(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoadingProducts(false);
      }
    };

    fetchProducts();
  }, []);

  // Static 10 feedbacks with productId
  useEffect(() => {
    setLoadingFeedback(true);
    setTimeout(() => {
      setFeedbacks([
        { id: 1, user: 'Ali', comment: 'Awesome quality!', productId: 1 },
        { id: 2, user: 'Ahmad', comment: 'Very nice fabric.', productId: 3 },
        { id: 3, user: 'Sara', comment: 'Loved the fitting.', productId: 5 },
        { id: 4, user: 'Usman', comment: 'Good value for money.', productId: 2 },
        { id: 5, user: 'Hina', comment: 'Color is very beautiful.', productId: 7 },
        { id: 6, user: 'Zain', comment: 'Fast delivery, satisfied.', productId: 4 },
        { id: 7, user: 'Ayesha', comment: 'Comfortable to wear.', productId: 6 },
        { id: 8, user: 'Bilal', comment: 'Not bad for the price.', productId: 8 },
        { id: 9, user: 'Maha', comment: 'Exactly as described.', productId: 9 },
        { id: 10, user: 'Hamza', comment: 'Highly recommend!', productId: 10 },
      ]);
      setLoadingFeedback(false);
    }, 1500);
  }, []);

  // Helper function to get product by id
  const getProductById = (id) => {
    return products.find((p) => p.id === id);
  };

  return (
    <div style={{marginTop : "120px" , padding :"1rem"}}>
    <div className="container my-5">
      <div>
        <img src={img12}  alt='not found' style={{objectFit: 'contain' }}/>
      <h2 className="mb-4" style={{padding:"50px", fontSize:"3rem"}}>Customer Reviews & Feedback</h2>
      </div>

      {loadingProducts || loadingFeedback ? (
        <Skeleton count={4} height={200} />
      ) : (
        <div className="feedback-grid">
          {feedbacks.map((fb) => {
            const product = getProductById(fb.productId);
            return (
              <div key={fb.id} className="card">
                <div className="card-body">
                  <h4>{fb.user}'s Feedback</h4>
                  <p className="mb-2">{fb.comment}</p>
                  {product ? (
                    <>
                      <h5>Product: {product.title}</h5>
                      <img src={product.image} alt={product.title} />
                      {/* <p><strong>Price:</strong> ${product.price}</p> */}
                    </>
                  ) : (
                    <p>Product not found.</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
    </div>
  );
};

export default FeedbackReviews;
