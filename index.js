const express = require("express")
const app = express();
const PORT = 8000;
app.use(logger)
app.use(express.json())

app.get("/books",(req,res)=>{
    res.send({
        "id":1,
        "title" : "Wings of Fire",
        "author":"ABC",
        "summary": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, harum."
    })
})

app.post('/books',(req,res)=>{
    res.status(201).json(req.body)
})

app.get("/libraries",(req,res)=>{
    res.send({
        "id":1,
        "librarian":"abc"
    })
})

app.post('/libraries',(req,res)=>{
    res.status(201).json(req.body)
    console.log(req.body)
})

app.get("/authors",(req,res)=>{
    res.send({
        "id":1,
        "author":"xyz"
    })
})

app.post('/authors',(req,res)=>{
    res.status(201).json(req.body)
    console.log(req.body)
})
function logger(res,res,next){
    console.log("logger")
    next();
}
app.listen(PORT,()=>{
    console.log(`Server is running at Port No.${PORT}`)
})