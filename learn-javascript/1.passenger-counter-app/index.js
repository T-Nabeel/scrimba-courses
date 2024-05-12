let countNumber = document.getElementById("count")
let savedItems = document.getElementById("saved-items")
let count = 0

// Increment function
function increment() {
  count += 1
  countNumber.innerText = count
}

// Decrement function
function decrement() {
  count -= 1
  countNumber.innerText = count
}

// Reset function
function reset() {
  count = 0
  countNumber.innerText = 0
}

// Reset entries function
function resetEntries() {
  savedNum = 0
  savedItems.innerText = 0
}

// Save function
function save() {
  savedNum = count + " - "
  savedItems.textContent += savedNum
  console.log(count)
}






// Excercise
let welcomeMsg = document.getElementById("welcome-msg")

let greeting = "Welcome back "

loginGreeting = greeting + "!"

welcomeMsg.innerText = loginGreeting

// welcomeMsg = welcomeMsg + "🙂"
welcomeMsg.innerText += " 🙂"
