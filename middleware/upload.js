import multer from "multer";
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name);
    }
});

export const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const chemin = path.extname(file.originalname);
        if (['.jpg', '.jpeg', '.png', '.svg'].includes(chemin)) {
            cb(null, true);
        } else {
            cb(new Error('Fichier non autorisé'), false);
        }
    }
});