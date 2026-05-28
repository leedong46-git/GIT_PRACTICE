const items = ["사과", "바나나", "딸기"];

const list = document.getElementById("list");
items.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
});
