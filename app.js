import express from "express";
import 'dotenv/config.js';
import studentRoutes from './routers/StudentRoutes.js';
import routes from "./routers/BookRoutes.js";
import cors from 'cors';
import userRoutes from "./routers/UserRoutes.js"; 


// init app
const app = express();

// enable CORS for frontend
let corsOptions = {
    origin: process.env.ORIGIN
};

// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// ROUTES
app.use('/student', studentRoutes);
app.use('/book', routes);
app.use('/users', userRoutes);

// start server
try {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`listening on port ${process.env.PORT || 3000}...`);
    });
} catch (e) {
    console.log(e);
}
