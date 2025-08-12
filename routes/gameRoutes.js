const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.get('/', gameController.getAll);
router.get('/:id', gameController.getById);
router.post('/', gameController.create);
router.put('/:id', gameController.update);
router.delete('/:id', gameController.remove);

module.exports = router;
