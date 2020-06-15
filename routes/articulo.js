import routerx from 'express-promise-router';
import articuloController from '../controllers/ArticuloController';

const router=routerx();

router.post('/add',  articuloController.add);
router.get('/:id', articuloController.query);
router.get('/',  articuloController.list);
router.put('/:id',  articuloController.update);
router.delete('/:id', articuloController.remove);
router.put('/:id/activate',  articuloController.activate);
router.put('/:id/deactivate',  articuloController.deactivate);

export default router;