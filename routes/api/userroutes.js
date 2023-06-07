const express = require('express');
const router = express.Router();
const userController = require('../../controllers/usercontroller');

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.post('/:userId/friends/:friendId', userController.addToFriendList);
router.delete('/:userId/friends/:friendId', userController.removeFromFriendList);

module.exports = router;
