const {getbooks, createusers, userDelete, updateusers } = require("../users/users.controller");
// const { createusers } = require("../users/users.controller");

const router = require("express").Router();

router.get('/book',getbooks);
router.post('/create',createusers);
router.get('/delete/:id',userDelete);
router.patch('/update',updateusers);

module.exports = router;
