import express, {json} from 'express';
import cors from 'cors';
import 'express-async-errors';
import {handleError, ValidationError} from "./utils/error";

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json());
app.use(json());
app.use(handleError)

// app.get('/', async (req, res)=>{
//      throw new ValidationError('Bład');
// })

app.listen(3001, 'localhost', ()=>{
    console.log('Listening on port http://localhost:3001');
});