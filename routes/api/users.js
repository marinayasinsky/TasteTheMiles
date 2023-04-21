//* Routing Logic

const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users')


//* POST 
router.post('/', usersCtrl.create)



module.exports = router;