const tables = document.getElementsByTagName("table");
const table2 = tables[1];
const a = table2.querySelector("a");

a.href = "training.com";
a.textContent = "Training";

const images = document.getElementsByTagName("img");
const lastImage = images[images.length - 1];
lastImage.style.border = "solid pink 2px";

function alertCheckedCheckboxes() {
  const form = document.getElementById("userData");

  const checkedCheckboxes = form.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  const values = Array.from(checkedCheckboxes).map((cb) => cb.value);
  alert("Checked values: " + values.join(", "));
}

const exampleElement = document.getElementById("example");
if (exampleElement) {
  exampleElement.style.backgroundColor = "pink";
}
