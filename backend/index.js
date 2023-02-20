const express = require("express");
const app = express();
const router = require("./router/router");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
app.use(cookieParser());

app.use("/", router);

app.listen(4000, () => {
  console.log(`Listening in port 4000`);
});
