const express = require("express");
const form=require("./../api/form.js");
const login=require("./../api/login.js");

const router = express.Router();

//router.post('/formget',question.add)
//router.delete('/remove/:_id',question.remove)
//router.put('/update/:_id',question.update)

router.post('/formget',form.get)
router.post('/formCheck',form.check)
router.post('/search',form.search)
router.post('/login',login.auth)

module.exports = router; 


