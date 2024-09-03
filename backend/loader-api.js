const express = require("express");
const app = express();

app.use(express.json());

let isLoading = true; 

app.get("/api/loader", (req, res) => {
  res.json({ loading: isLoading });
});
app.post("/api/loader", (req, res) => {
  isLoading = req.body.loading;
  res.json({ message: "Loader state updated" });
});

app.listen(5000, () => {
  console.log("Loader API listening on port 3000");
});