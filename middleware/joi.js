import joi from 'joi';

const utilisateurSchema = joi.object({
    matiere: joi.string().min(3).required(),
    note: joi.number().min(1).required()
});

export const validateUtilisateur = (req, res) => {
    const { error } = utilisateurSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
};