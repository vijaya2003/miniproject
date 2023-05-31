var express = require('express');
var router = express.Router();
const path = require('path'); router.use(express.json());

// var express = require("express");
// var router = express.Router();
// const router = express();
const { async } = require("@firebase/util");
const { FieldValue } = require("firebase-admin");
const { db } = require("./firebase.js");
//  router.set('views', path.join(__dirname, 'views')); router.set('view engine', 'ejs');
 router.get('/nav', function(req, res) {
    res.render("nav")
  });
  router.get('/cstudy', function(req, res) {
    res.render("cstudy")
  });
//   router.get('/cconcern', function(req, res) {
//     res.render("cconcern")
//   });
  router.get('/cfee', function(req, res) {
    res.render("cfee")
  });
  router.get('/cinternship', function(req, res) {
    res.render("cinternship")
  });
  router.get('/cstudy&conduct', function(req, res) {
    res.render("cstudy&conduct")
  });
  // router.get('/ccustodian', function(req, res) {
  //   res.render("ccustodian")
  // });
  router.get('/cresidence', function(req, res) {
    res.render("cresidence")
  });

  

 router.get('/cstudy', function(req, res) {
  try{
    const usersRef=db.collection("student");
    const doc= usersRef.get();
    let responseArr=[];
    doc.forEach(ele=>{
        responseArr.push(ele.data());
        console.log(ele.data())
    })
     res.render('cstudy',{responseArr:responseArr});
    //res.send("hello")
    console.log(responseArr)
   
//res.end()
}catch(error){
    res.send(error);
}
  });
 router.get('/ccustodian', function(req, res) {
  try{
    const usersRef=db.collection("student");
    const doc= usersRef.get();
    let responseArr=[];
    doc.forEach(ele=>{
        responseArr.push(ele.data());
        console.log(ele.data())
    })
     res.render('ccustodian',{responseArr:responseArr});
    // res.send("hello")
    console.log(responseArr)
   
//res.end()
}catch(error){
    res.send(error);
}
  });
//  router.get('/cfee', function(req, res) {
//   try{
//     const usersRef=db.collection("student");
//     const doc= usersRef.get();
//     let responseArr=[];
//     doc.forEach(ele=>{
//         responseArr.push(ele.data());
//         console.log(ele.data())
//     })
//      res.render('cfee',{responseArr:responseArr});
//     //res.send("hello")
//     console.log(responseArr)
   
// //res.end()
// }catch(error){
//     res.send(error);
// }
//   });
//  router.get('/cinternship', function(req, res) {
//   try{
//     const usersRef=db.collection("student");
//     const doc= usersRef.get();
//     let responseArr=[];
//     doc.forEach(ele=>{
//         responseArr.push(ele.data());
//         console.log(ele.data())
//     })
//      res.render('cinternship',{responseArr:responseArr});
//     //res.send("hello")
//     console.log(responseArr)
   
// //res.end()
// }catch(error){
//     res.send(error);
// }
//   });
//  router.get('/cresidence', function(req, res) {
//   try{
//     const usersRef=db.collection("student");
//     const doc= usersRef.get();
//     let responseArr=[];
//     doc.forEach(ele=>{
//         responseArr.push(ele.data());
//         console.log(ele.data())
//     })
//      res.render('cresidence',{responseArr:responseArr});
//     //res.send("hello")
//     console.log(responseArr)
   
// //res.end()
// }catch(error){
//     res.send(error);
// }
//   });
//  router.get('/cstudy&conduct', function(req, res) {
//   try{
//     const usersRef=db.collection("student");
//     const doc= usersRef.get();
//     let responseArr=[];
//     doc.forEach(ele=>{
//         responseArr.push(ele.data());
//         console.log(ele.data())
//     })
//      res.render('cstudy&conduct',{responseArr:responseArr});
//     //res.send("hello")
//     console.log(responseArr)
   
// //res.end()
// }catch(error){
//     res.send(error);
// }
//   });
  

 router.get('/cconcern',async (req,res)=>{
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
  
  
  
 router.get('/', function(req, res) {
    res.render("index");
});

// router.listen(8000);
module.exports =router;