// const hayk = { name: "Hayk", age: 27, id: '44' };
// const mariam = { name: "Mariam", age: 30, id: '13' };
// const karen = { name: "Karen", age: 28, id: '23' };
// const levon = { name: "Levon", age: 28, id: '909' };

 
// const users = [hayk, mariam, karen, levon]


// function Get(arg){
//     return users.map(x =>x[arg])
// }
// console.log(Get("name"))

// function Get(arg){
//     let arr= []
//    if(arg.length === 1){
//     arr.length = arg[0]
//    }
//    if(arg.length>1){
//     for(let i=0;i< arg.length;i++){
//         arr.push(arg[i])
//     }
//    }
//    return arr
// }
// console.log(Get(10))


// 1. Array.from({ length })

// function CustomArray(){
//     let arr = []
//     if(arguments.length === 1){
//         arr.length= arguments[0]
//     }
//     if(arguments.length>1){
//         for(let i=0; i<arguments.length;i++){
//     arr.push(arguments[i])        
//         }
//     }
//        return arr
//     }
    
//     CustomArray.from = function(){
//         let arr = []
//         if(arguments.length===1 && typeof (arguments[0]) === "object" && "length" in arguments[0]){
//             arr.length= arguments[0].length
//         }
//         if(arguments.length>1 &&  typeof (arguments[0]) === "object" && "length" in arguments[0] &&  typeof (arguments[1]) === "function"){
//             for(let i=0; i<arguments[0].length;i++){
//         arr.push(arguments[1](undefined, i, arr))        
//             }
//         }
//            return arr
//         }
    
    
//      console.log(CustomArray.from({length: 5}, (_, i)=>i))


3. //map()
// let arr= [1,2,3,4]

// let res=arr.map(x=>x+1)
// console.log(res)
// map((element, index, array) => { })

// function Get(arr,calback){
//     let arrs = [];
//     for(let i = 0;i<=arr.length;i++){
//         arrs.push(
//             calback(arr[i],i,arr)
//         )
//     }
//     return arrs
// }
// console.log(Get([1,1,1,1],elem =>elem+1))

4.//forEach
//let array1 = ['a', 'b', 'c'];
// array1.forEach(element => console.log(element));

// let array1 = ['a', 'b', 'c'];

// function Get(arr,calback){
//     let NewArr=[];
//     for(let i =0;i<=arr.length;i++){
//         NewArr.push(
//             calback(arr[i], i, arr)
//         )
//     }
// return NewArr
// }
// console.log(Get(array1,elem=>console.log(elem)))

5.//Concat

// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];
// let arr = [];
// function Get(arr1,arr2){
//   return arr=[...arr1, ...arr2]

// }
// console.log(Get(arr1,arr2))

6. // Every

// let arr = [5,2,3,4]
// function every(array, callback) {
//     const { length } = array;
   
//     for (let index = 0; index < length; index += 1) {
//       const value = array[index];
   
//       if (!callback(value, index, array)) {
//         return false;
//       }
//     }
   
//     return true;
//    }

//  console.log(every(arr,elem => elem>1))

 7.//Some

//   let arr = [5,2,3,4]
//   function some(arr, callback) {
//     for(let i=0; i < arr.length; i++){
//        if(callback(arr[i], i, arr)){
//           return true;
//        }
//     }
//    return false;
// }
// console.log(some(arr,elem => elem>4))

8.// fill
//fill(value,start,ent)

// function fill(array, value, startIndex = 0, endIndex = array.length) {
//     for (let i = startIndex; i <= endIndex; i += 1) {
//       array[i] = value;
//     }
   
//     return array;
//    }
// console.log(fill([1,1,1,1,1,],50,2,4))

9.// filter

// let arr=[1,2,3,4,5]
// /////console.log(arr.filter(elem=>elem>3))

// let arr=[1,2,3,4,5]
// function get(arr,callback) {
//     let res =[];
//     for(let i=0;i<arr.length;i++){
//         let value=arr[i];
//         if(callback(value,i,arr)){
//             res.push(value)
//         }
//     }
//     return res
// }
// console.log(get(arr,value=>value>2))

.10 //find

// function get(arr,calback){
//     for(let i=0;i<arr.length;i++){
//         if(calback(arr[i],i,arr)){
//             return arr[i]
//         }
//     }
// }
// console.log(get([1,2,3,4,5],elem=>elem>2))

.11//findIndex

// function get(arr,calback){
//     for(let i=0;i<arr.length;i++){
//         if(calback(arr[i],i,arr)){
//             return i
//         }
//     }
// }
// console.log(get([1,2,3,4,5],elem=>elem>3))

.12//flat
// function flat(arr,depth=0){
//     if(depth<1 ){
//         return arr;
//     }
//     return reduce(
//         arr,
//         (result,current) =>{
//             return concat(result, flat(current, depth-1))
//         },
//         [],
//     );
// }
// console.log('flat',[1,2,3,4,[5,6,[7]]],arr=>flat(arr,2))

.14//flatmap

// function flatMap(array, callback) {
//     return flat(map(array, callback), 1);
//    }

//    console.log(('flatMap', [1, 2, 3], array => flatMap(array, number => [number, number])));

.15//includes
// [1,2,3,4].includes(3) ----true

// let arr = [5,2,3,4]
//   function includes(arr, callback) {
//     for(let i=0; i < arr.length; i++){
//        if(callback(arr[i], i, arr)){
//           return true;
//        }
//     }
//    return false;
// }
// console.log(includes(arr,elem => elem===4))

.16//join
// let array= [1,2,3,4]
// // debugger
// function join(arr,sep=''){
//     let res='';
//     for (let i = 0; i < array.length-1; i++) {
//         res+=array[i];
//         res+=sep
        
//     }
//     res+=arr[arr.length-1]
//     return res
// }
// console.log(join())

.17//reduce

// function reduce(array, callback, initValue) {
//     const { length } = array;
   
//     let acc = initValue;
//     let startAtIndex = 0;
   
//     if (initValue === undefined) {
//       acc = array[0];
//       startAtIndex = 1;
//     }
   
//     for (let index = startAtIndex; index < length; index += 1) {
//       const value = array[index];
//       acc = callback(acc, value, index, array);
//     }
   
//     return acc;
//    }

//    console.log(reduce([1,1,1,1],(sum,number)=>sum+number,0))

.18// slice
// let array=[1,2,3,4,5]
// function slice(array, startIndex = 0, endIndex = array.length) {
//     const result = [];
   
//     for (let index = startIndex; index < endIndex; index ++) {
//       const value = array[index];
   
//       if (index < array.length) {
//        result.push(value);
//       }
//     }
   
//     return result;
//    }
// console.log(slice(array,2,3))
