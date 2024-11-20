var typed = new Typed(".multiple-text",{
    strings:["Frontend Developer","Sophomore","Coder"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

const express=require("express");
const bodyParser=require("body-parser")


const app=express();
const PORT =3000;
// Middleware for parsing form data
app.use(bodyParser.urlencoded({extended:true}))

//serve the Form
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});
// Handle form submission
app.post('/submit',(req,res)=>{
    const {name,email}=req.body;
})
//simple Validation
if(!name|| !email){
    return res.status(400).send("All fields are required")
}
// Error handling for invalid routes

app.use((req,res)=>{
    res.status(404).send("This page is not working...")
});
// start the server
app.listen(PORT,()=>{
    console.log('Server running at localhost:${PORT}')
});
//log data to console and display it on response
console.log('User Data :',{name,email});
res.send(`<h1>form submitted successfully</h1><p>Name ${name}Email:${email}</p>`)
