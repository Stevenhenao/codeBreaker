const express = require("express");
const cors = require("cors");
const codeBreaker = require('./codeBreaker');

const app = express();
app.use(express.json())
app.use(cors());
const port = app.listen(process.env.PORT || 3000);;

app.get("/start", (req, res) => {
  const secret = codeBreaker.start();
  const token = Buffer.from(secret).toString("base64");
  res.send({ token: token });
});

app.post("/guess", (req, res) => {
    const {token,value} = req.body;
    const secret = Buffer.from(token, "base64").toString("ascii");
    codeBreaker.setSecret(secret);
    const result = codeBreaker.guess(value);
    res.send({ result: result });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
