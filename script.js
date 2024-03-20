let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let totalEl = document.getElementById("total-el");
let count = 0;
let totalEntries = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    totalEntries += count;
    totalEl.textContent = "Total entries: " + totalEntries;
    countEl.textContent = 0;
    count = 0;
}

function decrement(){
  if(count == 0){
  count =0;
}else{
  count -=1;
  countEl.textContent = count};
}
