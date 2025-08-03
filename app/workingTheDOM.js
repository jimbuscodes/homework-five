// task 1
document.getElementById("title").innerHTML = "DOM Manipulation";

// task 2
const containerDiv = document.getElementById("container");
containerDiv.style.backgroundColor = "lightblue";

// task 3
const unorderedList = document.querySelector("ul");
const newLi = document.createElement("li");

newLi.innerHTML = "Item 7";
unorderedList.append(newLi);
