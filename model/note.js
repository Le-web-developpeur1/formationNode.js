import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    matiere: {
        type: String,
        required: true,
    },
    note: {
        type: Number,
        required: true
    },
    fichier: String
}, { 
    timestamps: true
});

export const Note = mongoose.model('Note', noteSchema);