const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const { Data, Status } = require("./models/index");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    let data = await Data.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});
app.get("/:id", async (req, res) => {
  try {
    let data = await Data.findOne({
      where : {
        productID: req.params.id
      }
    });
    if (!data) throw {message: 'Data not found'}
    res.status(200).json(data);
  } catch (error) {
    if (error.message) res.status(404).json({message: error.message})
    else res.status(500).json({ message: "Internal server error" });
  }
});
app.post("/", async (req, res) => {
  try {
    let {
      productID,
      productName,
      amount,
      customerName,
      status,
      transactionDate,
      createBy,
      createOn,
    } = req.body;
    let newData = await Data.create({
      productID,
      productName,
      amount,
      customerName,
      status,
      transactionDate,
      createBy,
      createOn,
    });
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});
app.put("/:id", async (req, res) => {
  try {
    let {
      productID,
      productName,
      amount,
      customerName,
      status,
      transactionDate,
      createBy,
      createOn,
    } = req.body;
    await Data.update({
      productID,
      productName,
      amount,
      customerName,
      status,
      transactionDate,
      createBy,
      createOn,
    },
    {
      where: {
        productID: req.params.id,
      },
    }
    );
    res.status(200).json({message: 'Success update'});
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
