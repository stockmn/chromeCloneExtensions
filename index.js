let myLeads =[]
const inputEl = document.getElementById("input-el")
const inputButton=document.getElementById("input-btn")
const ulEl= document.getElementById("ul-el")



inputButton.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    renderLeads()
    
})
function renderLeads(){
    let listItem=""
    for (let i = 0; i < myLeads.length; i++) {

        listItem+= `
        <li>
           <a href='"+myLeads[i]+"' target='_blank'>"+ myLeads[i]+ "</a>
        </li>
        `
    }
    ulEl.innerHTML =listItem
 
    
}