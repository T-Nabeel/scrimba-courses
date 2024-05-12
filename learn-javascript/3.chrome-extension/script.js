const saveBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const myLeads = [];

saveBtn.addEventListener("click", saveLead);

function saveLead() {
  myLeads.push(inputEl.value);
  inputEl.value = ""
  renderLeads()
}

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + "<a href= " + myLeads[i] + " target='_blank'>" + myLeads[i] + "</a>" +"</li>";
  }
  ulEl.innerHTML = listItems;
}

// Practice
// const box = document.getElementById("box")

// box.addEventListener("click", alertMsg)
// function alertMsg() {
//     alert("You have opened the box, here's a cookie :)")
// }

// const cont = document.getElementsByClassName("container")
// const cont = document.getElementById("container")
// cont.innerHTML = "<button onclick='buy()'>Buy!</button>"

// function buy() {
//     cont.innerHTML += "<p>Thank you for buying!</p>"
// }
