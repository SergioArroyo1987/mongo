
const mongo=require("mongoose");
const Photo=require("../tema2/index");
console.log(Photo);
console.log("sergiooo");



 function subirfotos(usuario1){
    
     
    usuario1.save()
    .then(()=>{
        
            console.log("Datos guardados corretamente");
    }).catch(error=>{
        
        
            console.log("error"+error);
            mongo.disconnect();
        
    })}

    function obtenerfoto(usuario1){
        console.log("holaaa");
        modelo.find({usuario:usuario1})
        .then(function(resultado){
                console.log(resultado);
                mongo.disconnect();
        }).catch(function(error) {
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


module.exports={subirfotos,obtenerfoto,eliminarfoto};
