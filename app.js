import express from "express"
import 'dotenv/config.js';
import studentRoutes from './routers/StudentRoutes.js';
import routes from "./routers/BookRoutes.js";

//int app
const app = express();

//midleware
app.use(express.json());


try{
 app.listen(process.env.PORT || 3000, ()=> {
    console.log(`listening to port ${process.env.PORT || 3000}...`);
 });
}catch(e){
    console.log(e);   
}
app.use('/student',studentRoutes);

app.use('/book',routes);


