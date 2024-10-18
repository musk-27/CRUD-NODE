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

app.post("/editBlog", async (req, res) => {
  const { blogname, blogdesc, blogdate, blogid } = req.body;
  const result = await db.query(
    // "UPDATE blog SET blogName = $1, blogDesc= $2 ,blogDate = $3 WHERE blogID = $4;",
    "UPDATE blog SET blogName = $1, blogDesc= $2 ,blogDate = $3 WHERE blogID = $4 RETURNING *;",
    [req.body.blogname, req.body.blogdesc, parseInt(req.body.blogdate), req.body.blogid]
  );

  res.json({
    status: "success",
    result: result.rows,
  });
});

app.post("/deleteBlog", async (req, res) => {
  const { id } = req.body;
  const result = await db.query("DELETE FROM blog WHERE blogId=$1;"[id]);

  res.json({
    result: "success",
    result: result.rows,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
