import express from 'express';
import { ENV } from './config/env.js';

// ROUTES
import TestRouter from './routes/test.router.js';

// APP EXPRESS
const app = express();

// MIDDLEWARE
app.use(express.json());

// Gestion des CORS pour react 5173
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", true);
    return next();
});


// Gestion des erreurs
app.use( (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json( {
        success: false,
        status,
        message,
    });
});

// Préfixe des URLS de l'API en appellant un router.express pour chaque préfixe
app.use("/api/test", TestRouter);

// Définition du PORT en reprenant le ENV.PORT ou bien en spécifiant 8080
const PORT = ENV.PORT || 8080;

// Ecoute du serveur
app.listen( PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
})

export default app;