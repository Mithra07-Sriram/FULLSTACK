var express = require("express");
var app = express();
const PORT = 3001;
app.get('/',(req,res)=>{
    res.send("welcome to backend server")
})
app.get('/json',(req,res)=>{
    res.json("welcome to backend ")
})
app.get('/static',(req,res)=>{
    res.sendFile('/Users/admin/OneDrive/Desktop/FullStack_React/fullstackPlacementBackend/index.html')
})
app.listen(PORT, () => {
  console.log(`backend server started\nUrl: http://localhost:${PORT}`);
});
