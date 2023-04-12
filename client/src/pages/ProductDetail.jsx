import React, { useEffect, useState } from "react";
import axios from "axios";
import "../ProductDetail.css";
import { useNavigate, useParams } from "react-router-dom";
const URL = "http://localhost:3000";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    productId: "",
    productName: "",
    amount: 0,
    customerName: "",
    status: "",
    transactionDate: "",
    createBy: "",
    createOn: "",
  });

  useEffect(() => {
    axios
      .get(`${URL}/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  // Render the product details
  return (
    <div className="flex justify-center">
      <div className="container  my-11 py-[150px] bg-gray-100 shadow-2xl w-[500px] h-[500px]">
        <h1 className="product-name font-bold text-4xl">{product.productName}</h1>
        <p>Product ID: {product.id}</p>
        <p>Amount: {product.amount}</p>
        <p>Customer Name: {product.customerName}</p>
        <p>Status: {product.status ? "SUCCESS" : "FAILED"}</p>
        <p className="transaction-date">
          Transaction Date:{" "}
          {new Date(product.transactionDate).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default ProductDetail;
