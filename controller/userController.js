import { Utilisateur }  from '../model/utilisateurs.js';

export const getUsers =  async (req, res, next) => {
    try {
        const taches = await Utilisateur.find();
        res.status(200).json(taches);
    } catch (error) {
        next(error);
    }
    
};

export const createUsers = async (req, res, next) => {
    try {
        const { email, password } = req.body;
       
        const User = new Utilisateur({ email, password });
        await User.save();

        res.status(200).json({ success: true, User });

    } catch (error) {
        console.error("Une erreur est survenue", error);
        next(error);
    }
};

