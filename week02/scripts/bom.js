const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

input.focus();
button.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    let li = document.createElement("li");
    let deletebutton = document.createElement("button");
    li.textContent = input.value;
    deletebutton.textContent = "X";
    li.append(deletebutton);
    list.appendChild(li);

    deletebutton.addEventListener("click", function () {
      list.removeChild(li);
    });

    input.value = "";
    input.focus();
  } else {
    alert("Please enter a valid entry");
  }
});
