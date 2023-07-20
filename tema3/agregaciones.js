const mongo=require("mongoose");
const {notasModel}=require("./modelo");

mongo.connect('mongodb+srv://sergioarroyo:sergioarroyo1987@codenotch.lxchpf2.mongodb.net/codenotch',{
    useNewUrlParser:false,useUnifiedtopology:false
});
// notasModel
// .aggregate([{$match:{"subject_name":"lengua"}},{$group: {"_id":{"subject_name":"lengua"},"Notas media:": {"$avg": "$mark"}}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// });
// notasModel
// .aggregate([{$count: "Numero de Alumnos"}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// });
// notasModel.aggregate([{$project:{
//     student_first_name:1,
//     student_last_name:1,
//     _id:0
// }}]).then((resultado)=>{
//     console.log(resultado);
// })
// .catch((error) =>
// {
//     console.log(error);
// });
// notasModel.aggregate([{$project:{
//     teachers:1,
    
//     _id:0
// }}]).then((resultado)=>{
//     for(a=0;a<resultado.length;a++){
//         console.log(resultado[a]);
//     }
    
// })
// .catch((error) =>
// {
//     console.log(error);
// });
// notasModel
// .aggregate([{$group: {"_id": {"grupo" : "$group_name"}, 
//             "Cantidad": {"$sum": 1}}},
//             {$count: {"Cantidad":{"$gt": 1}}},
//             {$sort: {"Numero_alumno": 1}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })
notasModel
.aggregate([{$group:{"_id":{"Asignaturas":"$subject_name"},
             "media":{"$avg":"$mark"}}}, 
             {$match:{"media":{"$gt":5}}},
             {$limit:5}])

             .then((result) =>
             {
                 console.log(result);
             })
             .catch((error) =>
             {
                 console.log(error);
             });

             notasModel
             .aggregate([{$unwind:"$teachers"},
             
             {$group:{"_id":{"Asignaturas":"$subject_name"},"Suma":{"$sum":1}}},
            
                          
                          
            ])
             
                          .then((result) =>
                          {
                              console.log(result);
                          })
                          .catch((error) =>
                          {
                              console.log(error);
                          })
             
             
             



