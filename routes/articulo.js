import routerx from 'express-promise-router';
import articuloController from '../controllers/ArticuloController';
import auth from '../middlewares/auth';

const router=routerx();

router.post('/add', auth.verifyUsuario, articuloController.add);
router.get('/:id', auth.verifyUsuario,articuloController.query);
router.get('/', auth.verifyUsuario, articuloController.list);
router.put('/:id', auth.verifyUsuario, articuloController.update);
router.delete('/:id', auth.verifyUsuario, articuloController.remove);
router.put('/:id/activate', auth.verifyUsuario, articuloController.activate);
router.put('/:id/deactivate', auth.verifyUsuario,  articuloController.deactivate);

export default router;