const express = require('express')
const cors = require("cors")
const app = express()

const port = 3000

app.use(cors({origin: 'http://localhost:3001'}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/post",(req,res)=>{
    res.json([{
        blogName:"Arya Global Blogs",
        blogDate:"11/10/2024",
        blogDesc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

