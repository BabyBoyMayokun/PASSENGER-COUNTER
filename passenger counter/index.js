//document.getElementById("count-el").innerText = 5

// let count = 5

//count + 1
// count = count + 1

// console.log(count)
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") //pass in argument


let count = 0
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let sel =  count + " - "
    saveEl.textContent+= sel
    countEl.textContent = 0
    count = 0

}

function undo(){
   count = count-1
   countEl.textContent = count

}






