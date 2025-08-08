import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { connectDb } from './config/db.js';
import { logger } from './middleware/logger.js';
import { errorH } from './middleware/errorH.js';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import noteRoutes from './routes/noteRoutes.js';
import fs from 'fs';

dotenv.config();
console.log("📁 Fichier .env existe :", fs.existsSync('.env'));
const PORT = parseInt(process.env.PORT, 10) || 3000;

if (!PORT || isNaN(PORT)) {
  throw new Error("❌ PORT invalide ou non défini");
}

const app = express();

connectDb();

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(logger);

app.use('/api', userRoutes);
app.use('/api', authRoutes);
app.use('/api', noteRoutes);
app.use('/files', express.static('uploads'));

app.use(errorH);

  

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
