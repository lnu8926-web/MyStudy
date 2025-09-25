var numCatsSelect = document.getElementById("numCats");

for (var i = i; i <= 5; i++) {
  var option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  numCatsSelect.appendChild(option);
  console.log(option);
}
