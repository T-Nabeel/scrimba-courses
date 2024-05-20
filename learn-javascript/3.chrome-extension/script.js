const saveBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLeads = [];

// Get the leads from localStorage
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

saveBtn.addEventListener("click", saveLead);

function saveLead() {
  myLeads.push(inputEl.value);
  inputEl.value = "";

  // Save myLeads to localStorage
  let myLeadsJSON = JSON.stringify(myLeads)
  localStorage.setItem("myLeads", myLeadsJSON)

  console.log(localStorage.getItem("myLeads"))

  renderLeads();
}

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>`
  }
  ulEl.innerHTML = listItems;
}