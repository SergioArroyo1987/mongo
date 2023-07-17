const { log } = require("console");
const mongo=require("mongoose");
mongo.connect('mongodb+srv://sergioarroyo:sergioarroyo1987@codenotch.lxchpf2.mongodb.net/codenotch',{
    useNewUrlParser:false,useUnifiedtopology:false
});

const chema=new mongo.Schema({
    name:String,
    email:String,
    role:String,
    verified:Boolean
});
let User=mongo.model("User",chema);
const Profile=new mongo.Schema({
    name:String,
    surname:String,
    dateofbirth:String,
    comments:String,
    rol:String
});
let profile=mongo.model("Profile",Profile);
const creedentials=new mongo.Schema({
    adress:String,
    phone:String,
    email:String,
    
});

let introducir1=new profile({
    name:"pureba",
    surname:"hello",
    dateofbirth:"qwee",
    rol:"sadda"
});

introducir1.save()
    .then(()=>{
        
            console.log("Datos guardados corretamente");
    }).catch(error=>{
        
        
            console.log("error"+error);
            mongo.disconnect();
        
    })
    let introducir=new User({
        name:"pepito",
        email:"hola@hotmail.com",
        role:"qwee",
        verified:true
    });
    introducir.save()
        .then(()=>{
            
                console.log("Datos guardados corretamente");
        }).catch(error=>{
            
            
                console.log("error"+error);
                mongo.disconnect();
            
        })














module.exports=mongo.model("users",chema);