import { ENV } from '../config/env.js';

export const test = async (req, res) => {
    try{
        console.log('La route est ok');
        res.status(200).json( {"message": 'LA ROUTE EST OK'} );
    } catch(erreur) {
        res.status(500).json({error: "Erreur de serveur interne.", message: erreur.message});
        console.log(erreur.message);
    }
}