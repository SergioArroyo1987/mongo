const { log } = require("console");
const mongo=require("mongoose");
const {Photo}=require("./foto");
const {subirfotos,obtenerfoto,eliminarfoto,eliminartodo,modificarfoto}=require("./funciones")

//const funciones=require('./funciones')
mongo.connect('mongodb+srv://sergioarroyo:sergioarroyo1987@codenotch.lxchpf2.mongodb.net/codenotch',{
    useNewUrlParser:false,useUnifiedtopology:false
});
let introducir=new Photo({
    usuario:"antonio",
    url:"asdasdsad",
    titulo:"fdsfsdfsdfds",
    Descripcion:"asdadasdad"
});




subirfotos(introducir);
//obtenerfoto("antonio");
//modificarfoto("pepito","asd","cambiar");
//eliminarfoto("antonio","fdsfsdfsdfds");



