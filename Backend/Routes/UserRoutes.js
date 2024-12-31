const express =  require('express')
const { addUser, getAllUsers } = require('../Controllers/UserController')

const router = express.Router()

router.post('/adduser', addUser );
router.get('/getusers', getAllUsers)

module.exports = router