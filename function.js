function getArr (arr=[10,20]){
arrayValue=[]
arrayValue[0]=
arr.reduce(function(element,z){
    return element+z
})

arrayValue[1]=arr.length
console.log(arrayValue)
    return arrayValue
}
var aa=[2,4,9,23,435]
getArr(aa)