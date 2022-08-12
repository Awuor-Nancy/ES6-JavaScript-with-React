
// template strings using backtiks
const name = "Josh";
let greeting = " Hello";
let address = "Do you stay in Karen?"; 
console.log(`${name} ${greeting}, ${address}`);

//  Arrow function

let myBirthday = (name,age) =>  {
    return `${name} ${age}`; 

}
console.log(myBirthday('kailie',21));

// shorter Arrow functions
let myGreeting = name => `welcome to my home ${name}`;
console.log(myGreeting('Johnson'));

// Rest operator using ...args
let myNums = (num1,num2) => console.log(num1, num2);
(myNums(30,40));

let names = (...args) => console.log(...args);

names("Alison",'toti','tulips','nancy');

    //with numbers the rest operator comes last 
    let numbers = (num1, num2, ...args) => {
        let sum = 0;
    for(let i = 0; i < args.length; i++){
        sum += args[i]; 
        sum2 = num1 + num2;  
    }
    console.log(sum);
    console.log(sum2);
  };

numbers(2,5,9,7,5,6,3);

    //spread operator allows arrays and objects to be expanded
    let arr1 = [2,4,6,8,10];
    let arr2 = [1,3,5,7,9,11];
    let arr3 = [...arr1, ...arr2];
    console.log(arr3);
     
    let list = ['food','clothes','kitchen','electronics'];
    let list2 = ['hospital','school','house','school'];
    let final = list.concat(list2);
    console.log(final);


    let myObj = {
        name : 'Malindi',
        address : 'Mombasa',
    }
    let myObj2 = {
        lady1 : 'Beatrice',
        age : 20,    
    }
    let myObj3 = {
        lady2 : 'Lencier',
        age : 25,
    }
    let all = {...myObj,...myObj2,...myObj3};
    console.log(all);

    // Destructuring arrays and objects
    let myName = 'Nancy Awuor Anyango';
    //change myName to an array
    let result = myName.split(' ');
    console.log(result);

    let person = ['Nancy', 'Awuor', 'Anyango'];

    let [firstName, , lastName] = person ;
    console.log(firstName);
    console.log(lastName);

   
    let [a,b] = [4,6];
    console.log(a);

   let students = {
    namez : 'Joana',
    ages : 39,
    location : 'uganda',
   }
   let {namez,ages,location} = students;
   console.log(ages);


   let [m,n,o,p] = [11,12,13,14];
   console.log(m,o,p);

   let jina = ['cons','nanc','vida','elly'];
   let [first,...rest] = jina;
   console.log(...rest);
   console.log(first);

   let devices = ['teli','fridge','blender'];
   let [one,...args] = devices;
   console.log(...args);
   console.log(one);

   //Array Function map
   let myArr = [1,2,3,4,5];
   let newArr = [6,7,8,9,10];
   for(let i = 0; i < myArr.length; i++) {
    newArr.push(myArr[i] *2); 
   }
   console.log(newArr);

   
   let data = [8,16,24,32,36,44];
   let newData = [];
   let out = data.map((item,position) => {
    console.log(`item at ${position} is in ${item}`);
    return data * 2;
  
   })
   console.log(newData);
   console.log(data);


   let profession = [
    {
        name : 'fuffy',
        profession : 'doctor',
        type : 'private',
    },
    {
        name : 'John lurk',
        profession : 'dev',
        type : 'public',
    },
    {
        name : 'Trevor',
        profession : 'writer',
        type : 'public',
    }
 ]
  let seeProfession = profession.map((data) => {
     console.log(data.name);
     console.log(data.type);
 })

 // array function reduce and gets the sum of the list
 //accumulator is the inital value that the count starts from.
 let fruits = [1,2,3,4,5,6]

 let fruity =  fruits.reduce(function (acc, item) {
    console.log(acc);
     return acc + item;
 }, 0)
 console.log(fruity);

 // filter functions
  let clothes = ['jacket','spagheti','cap','skirt'];

  let outfit = clothes.filter(item =>{
    return item % 2 === 0;

  }) 
  console.log(outfit);

 /// find and find index
  let arrayz = [2,3,5,6,10,8,18,21,33];
  arrayz.find((item) =>{
        return item % 2;

  })
  console.log(item);













// let persons = {
//     name :'Salma',
//     desire :{
//         zeal : 'I love learning JS',
//         love : 'Totaly love js',
//         reason : 'JS is life!'
//     },
//     brain : function(){
//         return this.name + ' ' + this.desire + 'for JS';
//     }   
// }
// let huntersResponse = ((yes,no)=> {
//     if(huntersResponse === 0){
//         return yes;
        
//     }
//     else{
//         return no;
//     }
//     console.log(huntersResponse('yes'`hey ${this.name} i have seen the fact that you have ${this.desired} and my answer is ${yes} if you will perfom and ${no} if you wont`));

// }) 















