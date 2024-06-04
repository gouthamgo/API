import express from 'express';
import 'dotenv/config'

 import jsforce from 'jsforce'

const app = express();
const PORT = 3001;


const{SF_LOGIN_URL ,SF_USERNAME ,SF_PASSWORD, SF_TOKEN} = process.env;

var conn = new jsforce.Connection({
    loginUrl:SF_LOGIN_URL
});

conn.login(SF_USERNAME, SF_PASSWORD+SF_TOKEN,(err,userInfo)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log("User Id"+ userInfo.id)
        console.log("Org Id"+userInfo.organizationId)
    }
})





app.get('/',(req,res)=>{
    conn.query("SELECT Id, Name FROM Account",(err,result)=>{
        if(err){
            res.send(err);
        }
        else{ 
            console.log("Total Requests"+ result.totalSize);
            res.json(result.records);
        }
    } )
})

app.listen(PORT, () => console.log(`The server is running at http://localhost:${PORT}`));
