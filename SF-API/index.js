import express from 'express';
import 'dotenv/config'

var jsforce = require('jsforce');

const app = express();
const PORT = 3001;


const{SF_LOGIN}



app.get('/',(req,res)=>{
    res.send("pass to salesforce")
})

app.listen(PORT, () => console.log(`The server is running at http://localhost:${PORT}`));
