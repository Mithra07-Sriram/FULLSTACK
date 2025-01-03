var express = require('express');
var path = require('path');
var mdb = require('mongoose');
var User=require('./models/users');
var app = express();
const PORT = 3001;
app.use(express.json())
mdb.connect("mongodb://localhost:27017/").then(() => {
    console.log("MongoDB Connection Successful")
}).catch(() => {
    console.log("Check your connection String")
})
app.get('/', (req, res) => {
    res.send("welcome to backend server")
})
app.get('/json', (req, res) => {
    res.json("welcome to backend ")
})
app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.post('/signup',(req,res)=>{
    console.log(req.body);
    var {firstname,lastname,email}=req.body
    console.log(firstname,lastname,email);
    try{
        var newUser=new User({
            firstname:firstname,
            lastname:lastname,
            email:email
        })
        newUser.save()
        console.log("UserAdded Successfully")
        res.status(200).send("User Added Successfully")

    }
    catch(err)
    {
        console.log(err);
    }
})
app.get('/getsignup',async(req,res)=>
{
    try{
           var allSignUpRecords=await User.find()
           res.json(allSignUpRecords)
           console.log("All Datas Fetched")
    }
    catch(err)
    {
        console.log("Cannot able to read the Records");
    }
})
app.listen(PORT, () => {
    console.log(`backend server started\nUrl: http://localhost:${PORT}`);
});
