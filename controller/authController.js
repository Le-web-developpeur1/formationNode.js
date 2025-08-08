import { Utilisateur }  from '../model/utilisateurs.js';
import jwt from 'jsonwebtoken';

export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await Utilisateur.findOne({email: email});
        if (!user) {
            return res.status(403).josn({ success: false, message: "Utilisateur non trouvé "});
        }

        const isMatch = await Utilisateur.findOne({password: password});
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Mot de passe incorrect'
            });
        }
        const token = jwt.sign({ id: user._id, email: user.email}, process.env.JWT_SECRET_KEY, { expiresIn: "1h"});
        res.status(201).json({ success: true, token, message: "Connexion réussie avec succès !"});
    } catch (error) {
        next(error);
    }
};