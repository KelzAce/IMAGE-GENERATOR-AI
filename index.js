const express = require("express");
const dotenv = require("dotenv").config();
port = process.env.PORT || 5000;

const openaiRoute = require("./routes/openai");

const app = express();

//Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/openai", openaiRoute);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
