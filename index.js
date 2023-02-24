let myLeads =[]
const inputEl = document.getElementById("input-el")
const inputButton=document.getElementById("input-btn")
const ulEl= document.getElementById("ul-el")


let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)
inputButton.addEventListener("click",function(    ){
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    //myLeads=JSON.stringify(myLeads)
    renderLeads()
    console.log(localStorage.getItem("myLeads"))
    
})
function renderLeads(){
    let listItem=""
    for (let i = 0; i < myLeads.length; i++) {

        listItem+= `
        <li>
           <a href='${myLeads[i]}' target='_blank'>
           ${myLeads[i]}
           </a>
        </li>
        `
    }
    ulEl.innerHTML =listItem
 
    
}