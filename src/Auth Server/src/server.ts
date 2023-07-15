import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Wor242d!");
});

// env file and data grabber

// api for handling all the oauth data
// jwt access token
// jwt refresh token
// connect to Ddatabse for internal statuuses

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
