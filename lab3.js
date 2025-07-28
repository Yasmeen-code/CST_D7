const students = [
  { id: "S001", name: "Alice", age: 20 },
  { id: "S002", name: "Bob", age: 22 },
  { id: "S003", name: "Charlie", age: 21 },
];

const studentSelect = document.getElementById("studentSelect");
students.forEach((student) => {
  const option = document.createElement("option");
  option.value = student.id;
  option.textContent = student.id;
  studentSelect.appendChild(option);
});

studentSelect.addEventListener("change", () => {
  const selectedId = studentSelect.value;
  const studentDataDiv = document.getElementById("studentData");
  const student = students.find((s) => s.id === selectedId);
  studentDataDiv.innerHTML = `
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>Age:</strong> ${student.age}</p>
        `;
});
