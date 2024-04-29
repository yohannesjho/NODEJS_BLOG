const express = require("express");
const router = express.Router();
const adminLayout = '../views/layouts/admin'
const post = require("../model/posts");
const user = require("../model/user");

router.get('/admin', async (req,res) => {
    try {
      const locals = {
        title: "Admin",
        description: "Simple Blog created with NodeJs, Express and mongoDb"
      }
      res.render('admin/index', {locals, layout:adminLayout})
    } catch (error) {
      console.log(error)
    }
  })

router.post('/admin', async (req,res)=>{
  try {
    const { username,password } = req.body;
    if(req.body.username === 'admin' && req.body.password === 'password'){
      res.send('You are logged in.')
    }
    else {
      res.send('Wrong username or password');
    }
    console.log(req.body)
    res.redirect('/admin')
  } catch (error) {
    console.log(error)
  }
})

router.post('/register', async (req,res)=>{
  try {
    const { username,password } = req.body;
    try {
      const user = await user.create({username, password});
      res.status(201).json({message: 'user created', user});
    } catch (error) {
      if(error.code === 11000){
        res.status(409).json({message: 'user already in use'});
      }
      res.status(500).json({message: 'Internal server error'})
      
    }
  } catch (error) {
    console.log(error)
  }
})





module.exports = router;