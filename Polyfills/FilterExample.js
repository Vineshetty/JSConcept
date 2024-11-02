//Es6 filter
let arr=[1,2,3,4,5,6]
let res=arr.filter((val,i,arr)=>{return val%2==0})
console.log(res)

//Polyfills
let pArr=[1,2,3,4,5,6]
Array.prototype.myFilter=function (predic){
    let newArr=[]
    for(let i=0;i<this.length;i++){
        let res=predic(this[i],i,this)
        if (res){
            newArr.push(this[i])
        }
    }
    return newArr
}
let temp=pArr.myFilter((val,i,arr)=>{return val%2==0})
console.log(temp)