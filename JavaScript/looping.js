// for in loop

arr=[10,20,[20.5,30.5],"a","kec",false]
console.log(arr);
/*
for(var a in arr)
{
    console.log(a);
    console.log("Elements present in the index",a,"is",arr[a]);
    
}
    //acess index or key
    */

//for of loop

/*
for(var b of arr)
{
    console.log(b);
}
    //acess element or value
    */

//for each
//EG1

/*arr.forEach((element,index)=>{
    console.log("Element is",element,"at the index",index);
}
)
*/

//eg2
obj1={
    "firstname":"Mithra",
    "lastname":"Sriram",
    "age":20
}
//obj1.forEach((value) => {
    //console.log(value);
    
//});

/*for(const element of obj1)
{
    console.log(element); //throws error=>obj1 is not iterable
}
    */

/*for(const element in obj1)
{
    console.log(element); //print value
}
    */
//for(const {key,element} of obj1)
  //  {
    //    console.log(key,element); //throws error=>obj is not iterable
   // }

   for (key in obj1)
   {
    value=obj1[key]
    console.log(key,value); //print key and value
   }
   