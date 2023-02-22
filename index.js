let myLeads =[]
const inputEl = document.getElementById("input-el").value
const   inputButton=document.getElementById("input-btn")
const ulEl= document.getElementById("ul-el")

inputButton.addEventListener("click",function(){
    myLeads.push(inputEl)
    console.log(myLeads)
})
for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li> "+myLeads[i]+" </li>"
 
    
}