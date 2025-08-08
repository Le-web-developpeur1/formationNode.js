import mongoose from "mongoose";

const utilisateurSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    dateAjout: {
        type: Date,
        default: Date.now
    }
});

export const Utilisateur = mongoose.model('Utilisateur', utilisateurSchema);