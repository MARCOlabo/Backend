import express from "express"
import 'dotenv/config.js';
import studentRoutes from './routers/StudentRoutes.js';
import routes from "./routers/BookRoutes.js";
import cors from 'cors';

//int app
const app = express();

//enable cors front end
let corsOptions ={
    origin: process.env.ORIGIN
}

//midleware
app.use(express.json());
app.use(cors(corsOptions));
app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next();
})


try{
 app.listen(process.env.PORT || 3000, ()=> {
    console.log(`listening to port ${process.env.PORT || 3000}...`);
 });
}catch(e){
    console.log(e);   
}
app.use('/student',studentRoutes);

app.use('/book',routes);


