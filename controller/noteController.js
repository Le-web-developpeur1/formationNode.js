import {Note}  from "../model/note.js";

export const createNote = async (req, res) => {
    const { matiere, note } = req.body;
    const fichier = req.file ? req.file.filename : null;
    try {

        if (!matiere || !note ) {
            return res.status(400).json({ message: "Tous les champs sont requis !" });
        }

        const notes =  new Note({ matiere, note, fichier });
        await notes.save();

        res.status(200).json({ success: true, message: "Note enregistrée avec succès !" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Erreur lors de l'ajout de la note", erreur: error.message });
    }
};

export const triPagNote = async (req, res) => {
    try {
       const page = parseInt(req.query.page) || 1;
       const limit = parseInt(req.query.limit) || 10;
       const skip = (page - 1) * limit;

       const totalNotes = await Note.countDocuments();
       const totalPages = Math.ceil(totalNotes / limit);
       const notes = await Note.find().skip(skip).limit(limit);
        res.status(200).json({ 
            success: true, 
            notes,
            page,
            limit,
            totalNotes,
            totalPages
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Erreur serveur", erreur: error.message });
    }
};