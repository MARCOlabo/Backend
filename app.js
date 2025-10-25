import express from "express"

//create epress app
const app = express();

//midleware
app.use(express.json());

const port = 2000;

try{
 app.listen(port, ()=> {
    console.log('listening to port 3000....');
 });
}catch(e){
    console.log(e);   
}

app.get('/marco', async(request, response) =>{
    response.status(200).json({message: "Hi marco!"});


});