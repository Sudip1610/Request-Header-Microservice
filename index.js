const express=require('express');
const app=express();
app.set('trust proxy', true);

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/api/whoami',(req,res)=>{
    //res.send(req.headers["accept-language"]);
    //console.log(req.headers['user-agent']);
    //var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    //console.log(req.ip);
    res.json({"ipaddress":req.ip,"language":req.headers["accept-language"],"software":req.headers['user-agent']});
});
const port=process.env.PORT || 3000;
app.listen(port,()=>console.log("Listening"));