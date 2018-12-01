var express = require('express');
var router = express.Router();
var materiaController = import('../controller/materiaController');

router.get('/', materiaController.getAll);
router.get('/:id', materiaController.getOne);
/*router.post('/', materiaController.store);
router.put('/:id', materiaController.update);
router.delete('/:id', materiaController.delete);*/

module.exports = router;