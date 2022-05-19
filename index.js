const app = require('./server/Server');

app.get('/', (req,res)=>{
    res.status(200).send("Welcome");
})

app.listen(process.env.PORT, (req,res) =>{
    console.log(`Server Started on ${process.env.PORT}`);
})