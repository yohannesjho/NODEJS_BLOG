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







module.exports = router;