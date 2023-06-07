const express = require('express');
const router = express.Router();
const thoughtController = require('../../controllers/thoughtcontroller');

router.get('/', thoughtController.getAllThoughts);
router.get('/:thoughtId', thoughtController.getThoughtById);
router.post('/', thoughtController.addThought);
router.put('/:thoughtId', thoughtController.updateThought);
router.delete('/:thoughtId', thoughtController.removeThought);
router.post('/:thoughtId/reactions', thoughtController.addReaction);
router.delete('/:thoughtId/reactions/:reactionId', thoughtController.removeReaction);

module.exports = router;
