// ###  Object Create   ###
const akash = {
    name : 'Akash Chandra debnath',
    age : 24,
    class : ['PSC', 'JSC', 'SSC', 'HSC', 'BSC'],
    family: {
        father : 'shatta',
        mother : 'shandha',
        brother: 'shonkor'
    }
}
 akash.family.sister = 'sumi';
//  console.log(akash.family);

// ### object destructuring   ###
const { name, age, family : {father, brother} } = akash;
// console.log(brother);








//### Array of Object convert to JSON   ###

const genuity = [
    {
        Department : 'Software',
        Employees : 21,
        Salary_range : '30k - 200k',
        GoodBehaviour : true
    },
    {
        Department : 'NOC',
        Employees : 30,
        Salary_range : '40k - 220k',
        GoodBehaviour : false
    },
    {
        Department: 'Admin',
        GoodBehaviour : true 
    }
];

var genuityJSON = JSON.stringify(genuity);      // Convert to JSON
var genuityDecode = JSON.parse(genuityJSON);    // Convert JSON to Array/object 
//console.log(genuityDecode);


genuity.forEach(function(item){         //foreach loop
    //console.log(item.Department);
})


genuity.map(function(item){         //map loop
//    console.log(item);
})

// genuity.map((item)=> console.log(item))     //arrow function


// Filter took your desired value and map get the data value
var behaviour = genuity.filter(function(item){      //filter
   return item.GoodBehaviour === true;
}).map(function(dept){
    return dept.Department;
})

// console.log(behaviour);








// ###  Arrow function   ###
function addNumbers(x, y, z)        //regular function
{
    return x+y+z;
}

var addNumbers = (x,y,z)=>{
    return x+y+z;
}

var addNumbers = (x,y,z) => x+y+z;

// console.log(addNumbers(20,20,20));






// ###  variable concatenation
var fName = 'Akash', mName = 'Chandra', lName = 'Debnath';

// let fullName = 'My Name is - '+fName+' '+mName+' '+lName;
//     fullName = `My name is - ${fName} ${mName} ${lName}`;
    
// console.log(fullName);







