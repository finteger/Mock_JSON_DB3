const express = require('express');
const router = express.Router();

//middleware to parse incoming json to native js objects
router.use(express.json());

//middleware to parse url-encoded strings
router.use(express.urlencoded());


//Render the view
router.get('/', (req, res) =>{
    res.render("home");
});

module.exports = router;