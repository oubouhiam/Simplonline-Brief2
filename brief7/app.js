const express=require('express');
// const session=require('express-session');
const app=express();
const fs=require('fs');
var url = require('url');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('data.json')
const db = low(adapter)
const bodyParser=require('body-parser');
app.use(express.static('style'))
app.use(express.static('views'))
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    fs.readFile('data.json',(err,data)=>{
        res.render('page1.ejs',{dataBus:JSON.parse(data)})
    })
})
app.post('/AddBus',(req,res)=>{
    db.get('Bus')
    .push({BusPic:req.body.BusPic,BusName:req.body.BusName,Direction:req.body.Direction,Date:req.body.Date,Time:req.body.Time,Price:req.body.Price})
    .write()
    res.redirect('/');
})
app.get('/page2',(req,res)=>{
    fs.readFile('data.json',(err,data)=>{
        res.render('page2.ejs',{dataBus:JSON.parse(data)})
    })
})
app.post('/updateBus',(req,res)=>{
  let Bus= db.get('Bus')
    .find({BusName:req.query.Bus,Direction:req.query.Direction})
    .value()
    
    res.render('page2.ejs',{Bus:Bus})  
    console.log(req.query.Direction) 
    console.log(Bus);
})
app.post('/update',(req,res)=>{
    db.get('Bus')
    .find({BusName:req.query.Bus2,Direction:req.query.Direction})
    .assign({BusPic:req.body.BusPic,BusName:req.body.BusName,Direction:req.body.Direction,Date:req.body.Date,Time:req.body.Time,Price:req.body.Price})
    .write()
    res.redirect('/')
  })
  app.post('/delete',(req,res)=>{
   let Bus= db.get('Bus')
    .find({BusName:req.query.Bus3,Direction:req.query.Direction})
    .value()
    console.log(Bus)
    db.get('Bus')
    .remove(Bus)
    .write()
    res.redirect('/')
  })
app.listen(2000,()=>{
    console.log('server run');
    })