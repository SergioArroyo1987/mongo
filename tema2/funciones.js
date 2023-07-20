
const mongo=require("mongoose");
const Photo=require("./foto");
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
    
    


module.exports={subirfotos,obtenerfoto,eliminarfoto,eliminartodo,modificarfoto};
