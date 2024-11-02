//Example for Es6
let arr=[1,2,3]
arr.forEach((val,i,arr)=>{
    console.log(val,i,arr)
})

//Polyfills 

let pArr=[1,2,3]
Array.prototype.myForEach=function (callBack){
    for(let i=0;i<this.length;i++)
        callBack(this[i],i,this)
}
pArr.myForEach((val,i,pArr)=>{
    console.log(val,i,pArr)
})