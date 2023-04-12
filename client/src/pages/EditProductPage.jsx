import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../EditProductPage.css';
const URL = 'http://localhost:3000'

function EditProductPage() {
  const { id } = useParams();
  const navigate = useNavigate()
  const [product, setProduct] = useState({
    productId: '',
    productName: '',
    amount: 0,
    customerName: '',
    status: '',
    transactionDate: '',
    createBy: '',
    createOn: ''
  });

  useEffect(() => {
    axios.get(`${URL}/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`${URL}/${id}`, product)
      .then(res => navigate(`/`))
      .catch(err => console.log(err));
  };

  return (
    <div className="edit-product-page">
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="productId">Product ID</label>
          <input type="text" name="productId" value={id} onChange={handleChange} />
        </div>
        <div className="form-field">
          <label htmlFor="productName">Product Name</label>
          <input type="text" name="productName" value={product.productName} onChange={handleChange} />
        </div>
        <div className="form-field">
          <label htmlFor="amount">Amount</label>
          <input type="number" name="amount" value={product.amount} onChange={handleChange} />
        </div>
        <div className="form-field">
          <label htmlFor="customerName">Customer Name</label>
          <input type="text" name="customerName" value={product.customerName} onChange={handleChange} />
        </div>
        <div className="form-field">
          <label htmlFor="status">Status</label>
          <input type="text" name="status" value={product.status ? "SUCCESS": "FAILED"} onChange={handleChange} />
        </div>
        <div className="form-field">
          <label htmlFor="transactionDate">Transaction Date</label>
          <input type="date-local" name="transactionDate" value={new Date(product.transactionDate).toLocaleDateString()} onChange={handleChange} />
        </div>
        <div className="form-field">
          <label htmlFor="createBy">Created By</label>
          <input type="text" name="createBy" value={product.createBy} onChange={handleChange} />
        </div>
        <div className="form-field">
          <label htmlFor="createOn">Created On</label>
          <input type="date-local" name="createOn" value={new Date(product.createOn).toLocaleDateString()} onChange={handleChange} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditProductPage;
