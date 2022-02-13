import Router from 'express';
import GymRecord from './GymRecord.js';
import GymRecordController from './GymRecordController.js';

const router = new Router();

router.post('/gym-records', GymRecordController.create);
router.get('/gym-records', GymRecordController.getAll);
router.get('/gym-records/:id', GymRecordController.getOne);
router.put('/gym-records', GymRecordController.update);
router.delete('/gym-records/:id', GymRecordController.delete);

export default router;