console.log("Hello World");
function sayHello() {
    console.log("Hello from sayHello function");
}
sayHello();
console.log("This is a simple JavaScript program");

console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("Hello World");
    }, 5000);
console.log("three");
console.log("four");

//callback example
function sum(a,b) {
    console.log(a+b);
}
function calculator(a,b,ds) {
    ds(a,b);
}
calculator(5,10,sum);

calculator(5,10,(a,b)=>{
    console.log(a+b);
});
console.log("one");
console.log("tw0");
const hello = () =>{
    console.log("Hello World");
}
setTimeout(hello, 5000);
console.log("three");
console.log("four");
for (let i=0; i<5; i++)
{
    let str = "";
    for (let j = 0; j < 5; j++)
    {
        str += j;
    }
    console.log(i,str);
}

function getData(dataid){
    setTimeout(() => {
        console.log("Fetching data for id:",dataid);
    },5000);
}
getData(1);
getData(2);
getData(3);
function getData(dataid,getnextdata) {
    setTimeout(() => {
        console.log("Fetching data for id:", dataid);
        if (getnextdata) {
            getnextdata();
        }
    },2000);
}
getData(1,()=>{
    console.log("getting data 2....")
    getData(2,() =>{
        console.log("getting data 3....")
        getData(3);
    });
});

const myPromise = new Promise((resolve,reject) =>{
    setTimeout(() => {
        const success = false;
        if (success) {
            resolve("Data fetched Sucessfully");
        }else {
            reject("Error fetching data");
        }
    },2000);
});

myPromise
   .then((data) => {
    console.log("Promise resolved with data:",data);
   })
   .catch((error) => {
    console.log("promise rejected with an error:",error);
   });


   let Promise= new Promise((resolve,reject)=>{
    console.log("i am a promise");
    if(1<0){
        resolve(123);
    }
    reject("Something Went Wrong");
   });

function getData(dataid) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Fetching data for id:",dataid);
            resolve("success");
        },2000);
    });
}   
let result=getData(123);
result;
getData(101)
  .then(result=> {
    console.log("First fetch",result);
    return getData(102);
  })
  .then(result => {
    console.log("second fetch:",result);
    return getData(103);
  })