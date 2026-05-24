//testing websockets-contextos project
//test 2 for websocket-contextos project
import express from 'express';


const app=express();
const PORT=8000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send();
})

app.listen(PORT,()=>{
    console.log(`Server is running http://localhost:${PORT}`);
})
