import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../AddDataPage.css';
const URL = 'http://localhost:3000'

function AddDataPage() {
  const [formData, setFormData] = useState({
    productID: '',
    productName: '',
    amount: '',
    customerName: '',
    status: '',
    transactionDate: '',
    createBy: '',
    createOn: '',
  });
  const navigate = useNavigate()
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  let submitData = async () => {
    try {
        let { data } = await axios({
            method: 'POST',
            url: `${URL}`,
            data: formData
        })
        navigate('/')
    } catch (error) {   
        console.log(error)
    }
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    submitData()
  };

  return (
    <div className="add-data-page">
      <h1>Add Data Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="productID">Product ID:</label>
          <input type="text" id="productID" name="productID" value={formData.productID} onChange={handleInputChange} />
        </div>
        <div className="form-field">
          <label htmlFor="productName">Product Name:</label>
          <input type="text" id="productName" name="productName" value={formData.productName} onChange={handleInputChange} />
        </div>
        <div className="form-field">
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" name="amount" value={formData.amount} onChange={handleInputChange} />
        </div>
        <div className="form-field">
          <label htmlFor="customerName">Customer Name:</label>
          <input type="text" id="customerName" name="customerName" value={formData.customerName} onChange={handleInputChange} />
        </div>
        <div className="form-field">
          <label htmlFor="status">Status:</label>
          <input type="text" id="status" name="status" value={formData.status} onChange={handleInputChange} />
        </div>
        <div className="form-field">
          <label htmlFor="transactionDate">Transaction Date:</label>
          <input type="datetime-local" id="transactionDate" name="transactionDate" value={formData.transactionDate} onChange={handleInputChange} />
        </div>
        <div className="form-field">
          <label htmlFor="createBy">Created By:</label>
          <input type="text" id="createBy" name="createBy" value={formData.createBy} onChange={handleInputChange} />
        </div>
        <div className="form-field">
          <label htmlFor="createOn">Created On:</label>
          <input type="datetime-local" id="createOn" name="createOn" value={formData.createOn} onChange={handleInputChange} />
        </div>
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
}

export default AddDataPage;
