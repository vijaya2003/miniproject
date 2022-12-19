var express = require('express');
var app = express();
const path = require('path');
app.use(express.json());

// var express = require("express");
// var router = express.Router();
// const app = express();
const { async } = require("@firebase/util");
const { FieldValue } = require("firebase-admin");
const { db } = require("./firebase.js");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/nav', function(req, res) {
    res.render("nav")
  });
  app.get('/cstudy', function(req, res) {
    res.render("cstudy")
  });
  app.get('/cconcern', function(req, res) {
    res.render("cconcern")
  });
  
  app.get('/ccustodian', function(req, res) {
    res.render("ccustodian")
  });
  app.get('/cfee', function(req, res) {
    res.render("cfee")
  });
  app.get('/cinternship', function(req, res) {
    res.render("cinternship")
  });
  app.get('/cresidence', function(req, res) {
    res.render("cresidence")
  });
  app.get('/cstudy&conduct', function(req, res) {
    res.render("cstudy&conduct")
  });
  

  app.get('/cconcern',async (req,res)=>{
    try{
        const usersRef=db.collection("student");
        const doc=await usersRef.get();
        let responseArr=[];
        doc.forEach(ele=>{
            responseArr.push(ele.data());
            console.log(ele.data())
        })
         res.render('cconcern',{responseArr:responseArr});
        //res.send("hello")
        console.log(responseArr)
       
  //res.end()
    }catch(error){
        res.send(error);
    }
  });
  
  
  

app.get('/', function(req, res) {
    res.render("index");
});

app.listen(8000);