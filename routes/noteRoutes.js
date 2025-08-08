import express from 'express';
import { createNote, triPagNote } from '../controller/noteController.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

router.post('/notes', upload.single('fichier'), createNote);
router.get('/notes', triPagNote);

export default router;