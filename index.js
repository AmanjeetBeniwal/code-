const express = require("express");
const app = express();
const port = 3000;
//Route
app.get("/", (req, res) => {
  res.send("hello this is hompage");
});
app.listen(port, () => {
  console.log("server is working on PORT :"+port);
});
