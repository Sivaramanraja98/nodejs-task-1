const { error } = require("console");
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json());
const port = 3010;

//creating folder

// fs.mkdir('file')

// creating file

app.post('/addfile',(req,res) => {
    const {filename}  = req.body;
    const date = new Date().toLocaleString();
    const content = date;
    const filepath = path.join(__dirname,'file',filename);

    fs.writeFile(filepath , content, (error) => {
        if(error) {
            console.log(error);
            res.status(500).send('Error creating file');
        } else{
            res.send('File Created Sucessfully');
        }
    });
});

// Reading file

app.get('/readfile',(req,res) => {
    const filename = 'date-time.txt';
    const filepath = path.join(__dirname,'file',filename);

    fs.readFile(filepath,'utf8',(error,data)=>{
        if(error){
            console.log(error);
            res.status(500).send('Error reading file');
        } else {
            res.send(data);
        }
    });
});


app.listen(port,() => {
    console.log(`Server Running on Port ${port}`);
});
