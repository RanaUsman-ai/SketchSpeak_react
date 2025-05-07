import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Store.css';

const ProductsInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    address: '',
    paymentMethod: '',
    accountNumber: '',
  });

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(prevQuantity => prevQuantity - 1);
  };

  const handlePayNow = () => setShowCheckout(true);
  const handleProceedPayment = () => setShowPaymentForm(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleConfirmOrder = () => {
    const { name, address, paymentMethod, accountNumber } = customerDetails;
    if (!name || !address || !paymentMethod || !accountNumber) {
      alert('Please fill in all fields!');
      return;
    }
    setOrderConfirmed(true);
  };

  const Loading = () => <div>Loading...</div>;

  const ShowProducts = () => {
    const totalPrice = (product.price * quantity).toFixed(2); // Ensure the total price is recalculated correctly

    return (
      <div className="product-detail row">
        <div className="col-md-6 image-container">
          <img src={product.image} alt={product.title} className="product-image" />
        </div>
        <div className="col-md-6 details-container">
          <h4 className="category">{product.category}</h4>
          <h1 className="title">{product.title}</h1>
          <p className="rating">
            Rating: {product.rating && product.rating.rate} <i className="fa fa-star"></i>
          </p>
          <h3 className="price">${product.price}</h3>
          <p className="description">{product.description}</p>

          {!showCheckout && !showPaymentForm ? (
            <button className="btn-add-to-cart" onClick={handlePayNow}>
              Pay Now
            </button>
          ) : !showPaymentForm ? (
            <div className="checkout-box">
              <div className="quantity-control">
                <button onClick={handleDecrease} className="btn-qty">-</button>
                <span className="quantity">{quantity}</span>
                <button onClick={handleIncrease} className="btn-qty">+</button>
              </div>
              <p className="total-price">Total: ${totalPrice}</p> {/* Show updated total price */}
              <button className="btn-payment" onClick={handleProceedPayment}>
                Proceed to Payment
              </button>
            </div>
          ) : (
            <div className="payment-form">
              <h4>Select Payment Method:</h4>
              <select
                name="paymentMethod"
                onChange={handleInputChange}
                value={customerDetails.paymentMethod}
              >
                <option value="">Select</option>
                <option value="Mezaan Bank">Mezaan Bank</option>
                <option value="Askari Bank">Askari Bank</option>
                <option value="HBL Bank">HBL Bank</option>
                <option value="JazzCash">JazzCash</option>
              </select>

              {customerDetails.paymentMethod && (
                <>
                  <h4 className="mt-3">Enter Account Number:</h4>
                  <input
                    type="text"
                    name="accountNumber"
                    placeholder="Enter Account Number"
                    maxLength="1000"
                    value={customerDetails.accountNumber}
                    onChange={handleInputChange}
                  />
                </>
              )}

              <h4 className="mt-3">Delivery Address:</h4>
              <input
                type="text"
                name="address"
                placeholder="Enter Address"
                maxLength="1000"
                value={customerDetails.address}
                onChange={handleInputChange}
              />

              <h4 className="mt-3">Customer Name:</h4>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                maxLength="1000"
                value={customerDetails.name}
                onChange={handleInputChange}
              />

              <button className="btn-confirm" onClick={handleConfirmOrder}>
                Confirm Order
              </button>

              {orderConfirmed && (
                <p className="order-confirmed">✅ Order Confirmed!</p>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div style={{ marginTop: '120px', padding: '1rem' }}>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </div>
  );
};

export default ProductsInfo;
