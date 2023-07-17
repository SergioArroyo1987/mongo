const { log } = require("console");
const mongo=require("mongoose");
const funciones=require("./funciones")

//const funciones=require('./funciones')
mongo.connect('mongodb+srv://sergioarroyo:sergioarroyo1987@codenotch.lxchpf2.mongodb.net/codenotch',{
    useNewUrlParser:false,useUnifiedtopology:false
});

const photo=new mongo.Schema({
    usuario:String,
    url:String,
    titulo:String,
    Descripcion:String
});
const Photo=mongo.model("Photo",photo,"photo");
let introducir=new Photo({
    usuario:"antonio",
    url:"asdasdsad",
    titulo:"fdsfsdfsdfds",
    Descripcion:"asdadasdad"
});
function subirfotos(usuario1){
    
     
    usuario1.save()
    .then(()=>{
        
            console.log("Datos guardados corretamente");
    }).catch(error=>{
        
        
            console.log("error"+error);
            mongo.disconnect();
        
    })}

    function obtenerfoto(usuario1){
        console.log(usuario1);
        Photo.find({usuario:usuario1})
        .then(function(resultado){
            for(a=0;a<resultado.length;a++)
                console.log(resultado[a].url);
                mongo.disconnect();
        }).catch(function(error) {
                console.log(error);
        })
}
function modificarfoto(titulo,descripcion,cambiar){
    Photo.updateMany({titulo:titulo,Descripcion:descripcion},{Descripcion:cambiar})
    .then((data)=>{
        console.log("datos modificados correctamente");
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    })
}
function eliminarfoto(usuario,titulo){
    Photo.deleteOne({usuario:usuario,titulo:titulo})
    .then((data)=>{
        console.log("dato eliminado");
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    })
}
function eliminartodo(usuario){
    Photo.deleteMany({usuario:usuario})
    .then((data)=>{
        console.log("datos eliminado");
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    })
}



//subirfotos(introducir);
//obtenerfoto("antonio");
//modificarfoto("pepito","asd","cambiar");
eliminarfoto("antonio","fdsfsdfsdfds");


module.exports={Photo};
