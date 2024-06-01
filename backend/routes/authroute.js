const express = require('express');
const authcontroller = require('../controllers/authcontroller');
const router = express.Router();

router.post('/contact', authcontroller.uploadSingle, authcontroller.contact);
router.get('/contactlist', authcontroller.contactlist);
router.get('/singlecontactlist/(:mobilenumber)', authcontroller.singlecontactlist);

module.exports = router;
