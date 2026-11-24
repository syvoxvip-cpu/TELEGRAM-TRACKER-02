const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});

app.post("/webhook", (req, res) => {
  console.log("Update received:", JSON.stringify(req.body, null, 2));
  res.status(200).json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(Server listening on port ${PORT});
});
