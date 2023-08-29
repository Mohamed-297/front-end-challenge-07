let dice=document.querySelector(".dice-container");
let adviceContainer=document.querySelector(".body-of-advice h2")
let adviceText
let IdContainer=document.querySelector(".header-of-advice span")
let adviceId
dice.addEventListener("click",()=>{
    // resetting the id and the advice into empty
    adviceContainer.innerHTML=""
    IdContainer.innerHTML=""
    fetch("https://api.adviceslip.com/advice").then((res)=>res.json())
    .then((res)=>{
        // adding the advice from the api
        adviceText=document.createTextNode(res.slip.advice)
        // adding the advice id from the api
        adviceId=document.createTextNode(res.slip.id) 
        // appending
        adviceContainer.appendChild(adviceText)
        IdContainer.appendChild(adviceId)
    })

})

