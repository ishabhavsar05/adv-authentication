const express = require('express');
const userController = require('../controllers/user.controller');
console.log(userController);

const router = express.Router();

router.get('/test',userController.test)
router.post('/register',userController.register)


module.exports=router;