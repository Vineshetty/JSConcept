//ES6 example
let arr=[1,2,3,4]
let res=arr.reduce((prev,val,i,arr)=>{
    return (prev+(val*2))
},0)
console.log(res)

let res2=arr.reduce((prev,val,i,arr)=>{
    return (prev+(val*2))
})
console.log(res2)

//Polyfills
Array.prototype.myReduce=function (callBk,initValue){
let startIndex=0
let result=null
 if(typeof(initValue)=="undefined"){
    initValue=this[0]
    startIndex=1
 }
 for(let i=startIndex;i<this.length;i++){
    initValue=callBk(initValue,this[i],i,this)
 }
 return initValue;
}

let pArr=[1,2,3,4]
let pres1=pArr.myReduce((prev,val,i,arr)=>{
    return (prev+(val*2))
},0)
console.log(pres1)

let pres2=pArr.myReduce((prev,val,i,arr)=>{
    return (prev+(val*2))
})
console.log(pres2)
