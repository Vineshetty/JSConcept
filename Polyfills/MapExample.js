//ES6 map example
let arr=[1,2,3]
let e=arr.map((val,i,arr)=>{
    return val+1
})
console.log(e)

//Polyfills
let pArr=[1,2,3]
Array.prototype.myMap=function (callBk){
    let res=[]
    for(let i=0;i<this.length;i++){
        let tempRes=callBk(this[i],i,this)
        res.push(tempRes)
    }
    return res
}

let pres=pArr.myMap((val,i,arr)=>{
    return val+1
})
console.log(pres)

let pres2=pArr.myMap((val)=>{
    return val+1
})
console.log(pres)