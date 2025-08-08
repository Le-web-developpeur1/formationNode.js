import mongoose from "mongoose";



export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DB);
        console.log("Connexion à mongoDB réussie !")
    } catch (error) {
        console.error("Erreur de connexion à MongoDB");
    }
};
