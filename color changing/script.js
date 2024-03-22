// console.log("hima is me")
// var name = "hima salle"
// var age = 21
// var dob= "1/1/2003"
// var state = "single"
// var x,y
// var message =`your name is : ${name}\nyour age is : ${age}\ndate of birth is : ${dob}
// sorry but you are ${state}`
// console.log(message)
// x=20
// var std = "hello world"
// console.log(std)

// console.log(std.toUpperCase())

// console.log(std.replace("o","y"))

// document.getElementById("sub").addEventListener("click", function(){
// var z= document.getElementById("hw").value
// console.log(z)
 
// document.getElementById("v1").innerHTML= `${z.toUpperCase()}
//  ${z.replace("o","y")}  ${ z.split("").reverse().join("")}`
// function p(z){
//      console.log(z)
// }
// })
// var aa =[10,31,15,45,23,10,45]

// document.getElementById("toggle").addEventListener("click",function(){
//      console.log("ddd")
//      document.getElementById("dd").innerHTML =`<style>body{background-color: rgb(87, 149, 204);} `
// })
document.getElementById("do").addEventListener("click",function(){
       
        document.getElementById("do").style.backgroundColor = `#${randomColor()}`
     
        setInterval(function(){

          document.getElementById("xx").style.backgroundColor =`#${randomColor()}`
     },2000)
})

function randomColor(){
     return Math.floor(Math.random()*16666666).toString(16)
}