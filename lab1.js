const imagesCollection = document.images;
console.log("Images using document.images collection:");
for (let i = 0; i < imagesCollection.length; i++) {
  console.log(imagesCollection[i]);
}

const imagesQuery = document.querySelectorAll("img.img2");
console.log("Images using document.querySelectorAll('img.img2'):");
imagesQuery.forEach((img2) => console.log(img2));

const cityDropdown = document.getElementById("cityDropdown");
const cityOptions = cityDropdown ? cityDropdown.options : [];
console.log("City dropdown options:");
for (let i = 0; i < cityOptions.length; i++) {
  console.log(cityOptions[i].text + " (value: " + cityOptions[i].value + ")");
}

const tables = document.getElementsByTagName("table");
const secondTable = tables[1];
const secondTableRows = secondTable.rows;
console.log("Rows in the second table:");
for (let i = 0; i < secondTableRows.length; i++) {
  console.log(secondTableRows[i]);
}

const fontBlueElements = document.getElementsByClassName("fontBlue");
console.log("Elements with class 'fontBlue':");
for (let i = 0; i < fontBlueElements.length; i++) {
  console.log(fontBlueElements[i]);
}
