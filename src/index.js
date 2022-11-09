if (document.readyState !== "loading") {
  console.log("Document is ready");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting");
    initializeCode();
  });
}

let noteCounter = 0;

function initializeCode() {
  const addNoteButton = document.getElementById("add-note");
  const removeNoteButton = document.getElementById("remove-note");

  addNoteButton.addEventListener("click", function () {
    const notes = document.getElementById("notes");
    let newParagraph = document.createElement("p");
    newParagraph.innerText =
      ++noteCounter + ". " + document.getElementById("message").value;
    notes.appendChild(newParagraph);
  });

  removeNoteButton.addEventListener("click", function () {
    const notes = document.getElementById("notes");
    notes.removeChild(notes.lastChild);
    noteCounter--;
  });
}

/*
console.log("hello worlds");

let numbers = [];

numbers.push(2)
numbers.push(4)
numbers.push(6)
numbers.push(8)

console.log(numbers)

numbers.unshift(10)

console.log(numbers)

let number = numbers.pop()


console.log(numbers)
console.log(number)

let student = {
  name: "David",
  id: "1234"
}

let students = [];

students.push(student)
students.push({name: "Cheng", id: "1111"})
students.push({name: "Jack", id: "2222"})
students.push({name: "Pekka", id: "3333"})

console.log(students)
students.forEach(s => console.log(s))

while (students.lenght > 0) {
  console.log(students.pop())
}
console.log(students)
*/
