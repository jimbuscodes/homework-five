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

// tasks 4 - 7
const listItems = document.querySelectorAll("li");

for (let i = 0; i < listItems.length; i++) {
  switch (i) {
    case 0:
      let firstItem = listItems[i];
      firstItem.style.color = "crimson";
      break;
    case 2:
      let thirdItem = listItems[i];
      thirdItem.style.backgroundColor = "pink";
      break;
    case 4:
      let fifthItem = listItems[i];
      fifthItem.style.backgroundColor = "yellow";
      break;
    case 6:
      let seventhItem = listItems[i];
      seventhItem.style.color = "royalBlue";
      seventhItem.style.backgroundColor = "lightGray";
      break;
  }
}
