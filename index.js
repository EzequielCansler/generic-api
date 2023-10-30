const express = require("express");
const v1ItemRouter = require("./src/v1/routes/itemRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1/items", v1ItemRouter);
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
