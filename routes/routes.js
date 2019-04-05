const express = require('express')

const db = require('../db')

const router = express.Router()
let text = {
  info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

router.get('/', (req, res) => {
 
      res.render('partials/quizpage', text)
})
router.post('/', (req, res) => {
 let text = req.body
  console.log(text)
})


module.exports = router
