const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const db = require("./config/db.js");

app.use(cors({ origin: "http://localhost:3001" }));
app.use(express.json()); // Enable JSON body parsing

let posts = [
  {
    id: 1,
    blogName: "Arya Global Blogs",
    blogDate: "11/10/2024",
    blogDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

// GET posts
app.get("/post", async (req, res) => {
  const posts = await db.query("SELECT * FROM blog");

  res.json({
    status: "success",
    result: posts.rows,
  });
});

// POST new post
app.post("/post", async (req, res) => {
  const { name, desc, date } = req.body;
  console.log("date", date, "typeof dat", typeof parseInt(date) );

  const result = await db.query(
    "INSERT INTO blog(blogID, blogName, blogDesc, blogDate) VALUES ($1, $2, $3, $4) RETURNING *",
    [Math.floor(Math.random() * 1000000000) + 1, name, desc, parseInt(date)]
  );

  res.json({
    status: "success",
    result: result.rows,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
