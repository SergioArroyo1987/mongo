const mongo=require("mongoose");
const { domainToASCII } = require("url");
mongo.connect('mongodb+srv://sergioarroyo:sergioarroyo1987@codenotch.lxchpf2.mongodb.net/codenotch',{
    useNewUrlParser:false,useUnifiedtopology:false
});

const Marks = new mongo.Schema(
    {
        date:Date,
        mark:Number,
        student_first_name:String,
        student_last_name:String,
        group_name:String,
        subject_name:String,
       

    
    }
    
)
const teachers=mongo.Schema({
    teacher_first_name:String,
    teacher_last_name:String
})

Marks.add({teachers: [teachers]});

let notasModel = mongo.model("notasArbol", Marks);
let profesorModel = mongo.model("profesoresArbol", teachers);
let profesores1=new profesorModel({
    teacher_first_name:"Carmelo",
    teacher_last_name:"pepillo"
})
let notas1=new notasModel({
    date:11/1/12,
    mark:6,
    student_first_name:"Sergio",
    student_last_name:"Arroyo",
    group_name:"a",
    subject_name:"matematicas",
    teachers:[profesores1]

})
let profesores2=new profesorModel({
    teacher_first_name:"Eduardo",
    teacher_last_name:"pepillo"
})
let notas2=new notasModel({
    date:11/1/12,
    mark:9,
    student_first_name:"Irene",
    student_last_name:"Rubio",
    group_name:"a",
    subject_name:"lengua",
    teachers:[profesores2]

})

let notas3=new notasModel({
    date:12/1/12,
    mark:4,
    student_first_name:"Sergio",
    student_last_name:"Arroyo",
    group_name:"a",
    subject_name:"lengua",
    teachers:[profesores1]

})
//notas1.save();
//notas2.save();
//notas3.save();

module.exports={notasModel,profesorModel};
