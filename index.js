// In src/index.js
const express = require("express");
// *** ADD ***
const v1StockRouter = require("../src/routes/stockRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1/", v1StockRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});