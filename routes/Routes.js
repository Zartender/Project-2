const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/Controllers');

/**@route GET && Post --  
 * get users @fter login, 
 * ? through user(user id), 
 *    -get groups im a part of   
 * post new group data
 */
router.route("/").get(Controllers.getMyGrps).post(Controllers.createGroup);

//get groups, 
router.route("/:group_name").get(Controllers.getGroup);

//router.route("/newGroupPost").get(Controllers.getAllPosts).post(Controllers.createNewPost);

router.route("/:").get(Controllers.getPostById);

// router.route("/:id").get(Controllers.getPostById);

module.exports = router;