console.log("kalana Dananjaya");

document.write('<h1> Kalana Dananjaya <h1/>');


//comparison operators

const l = 13;
const m = 13;

//equal
console.log(l == m);

// not equal 
console.log(l != m);

//Greater than(>)
console.log(l > m);

//less than(<)
console.log(l < m);

//Greater than or equal(>=)
console.log(l >= m);

//less than or equal(<=)
console.log(l <= m);

//-----------------------------------------------------

// logical operators 
const n = true;
const o = true;

//AND - &&
console.log( n && m);


//NOT - !
console.log( !n );

//--------------------------------------------

//function

function myName(){
    console.log("KAlana");
}

// Arrow function
const printMyname = (name) =>{
    console.log("My name is "+name);
}

//return type function
const sum = (num1,num2) =>{
    const total = num1+num2;
    return total;
} 

const total = sum(10,30);
console.log("total is "+total);

myName();
printMyname("kalana");
printMyname("Binara");
printMyname("Chamikara");
printMyname("Yasindu");

//--------------task----------------------

const studentDetails = (name,age,grade) =>{
    console.log("My name is "+name);
    console.log("My age is "+age);
    console.log("Im in grade  "+grade);
    console.log("");
}

studentDetails("kalana",23,"Grade 12");
studentDetails("Shashika",24,"Grade 13");
studentDetails("Binara",22,"Grade 11");

//-------------------------------------------

// flow controllers

// if

const stu1 = 1800;
const stu2 = 1600;

if(stu1 > stu2){
    if(stu1 > 100){
        console.log("100++");
    }else{
        console.log("Fuck you !");
    }
}else if(stu1 == stu2){
    console.log("Equal Number");
}else{
    console.log("False")
}

// switch

const val = "ACPT";
switch(val){

    case "ACPT":
    console.log("print acpt");
    break;

    case "AFSD":
    console.log("print afsd");
    break;

    default:
        console.log("print Default"); 
        break; 
}

//---------------Task 2---------------------

const marks = 58;

if (marks >= 75){
    console.log("A");
}else if( marks >= 65){
    console.log("B");
}else if( marks >= 55){
    console.log("c");
}else if( marks >= 45){
    console.log("s");
}else {
    console.log("fail");
}

//-------------------------------------------

//for-loop

const arr = [10,20,30,40,50,60,70,80,90];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
    
}


//-------------------task 3 -------------------

const arr1= [10,20,30,40,50,60,70,80,90];
for (let i = 0; i < arr1.length; i++) {
    console.log("Marks of student"+(i+1)+"is :"+arr1[i]);
    const marks = arr1[i];
        if (marks >= 75){
            console.log("A");
        }else if( marks >= 65){
            console.log("B");
        }else if( marks >= 55){
            console.log("c");
        }else if( marks >= 45){
            console.log("s");
        }else {
            console.log("fail");
        }    
}

//while loop

let w = 0;
while(w<10){
    console.log("While loop "+w);
    w++;
}

// do while 

let chill = 1;
do{
    console.log(chill);
    chill++;

}while(chill <10)