import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
const URL = 'http://localhost:3000'

function HomePage() {
  // Define some sample data for the table
  const [tableData, setTableData] = useState([]);

  let formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  let fetchData = async () => {
    try {
        let { data } = await axios({
            method: 'GET',
            url: `${URL}`
        })
        setTableData(data)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  const tableStyle = {
    borderCollapse: "collapse",
    margin: "20px auto",
    width: "80%",
  };

  const thStyle = {
    backgroundColor: "#009688",
    color: "#fff",
    fontWeight: "bold",
    padding: "10px",
    textAlign: "left",
  };

  const tdStyle = {
    borderBottom: "1px solid #ddd",
    padding: "10px",
    textAlign: "left",
  };

  return (
    <div>
      <h1 className="text-center font-bold text-4xl mb-11">Data Table</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Product ID</th>
            <th style={thStyle}>Product Name</th>
            <th style={thStyle}>Amount</th>
            <th style={thStyle}>Customer Name</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Transaction Date</th>
            <th style={thStyle}>Create By</th>
            <th style={thStyle}>Create On</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td style={tdStyle}>{row.productID}</td>
              <td style={tdStyle}>{row.productName}</td>
              <td style={tdStyle}>{row.amount}</td>
              <td style={tdStyle}>{row.customerName}</td>
              <td style={tdStyle}>{row.status ? 'SUCCESS' : 'FAILED'}</td>
              <td style={tdStyle}>{formatDate(row.transactionDate)}</td>
              <td style={tdStyle}>{row.createBy}</td>
              <td style={tdStyle}>{formatDate(row.createOn)}</td>
              <td style={tdStyle}>
                <Link 
                className="mx-2"
                to={`/edit/${row.productID}`}>EDIT</Link>
                <Link to={`/detail/${row.productID}`}>DETAIL</Link>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
