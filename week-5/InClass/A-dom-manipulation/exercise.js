/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

// let allParagraph = document.querySelectorAll("p");
// for (let i = 0; i < allParagraph.length; i++) {
//   console.log(allParagraph[i]);
// }

function logNode(node) {
  console.log(node);
}

let allParagraph = Array(document.querySelectorAll("p"));
allParagraph.forEach(logNode);

let firstDiv = document.querySelector(".site-header");
logNode(firstDiv);

let jumbDiv = document.querySelector("#jumbotron-text");
logNode(jumbDiv);

let allParagraphInside = document.querySelectorAll(".primary-content p");
logNode(allParagraphInside);
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text 
"Thanks for visiting Bikes for Refugees!"
*/
alertBox = document.querySelector("#alertBtn");
alertBox.addEventListener("click", greeting);

function greeting() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the '
Change colour' button is clicked.
*/
let changeBkColor = document.querySelector("#bgrChangeBtn");
changeBkColor.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
});

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

let addText = document.querySelector("#addTextBtn");
addText.addEventListener("click", addParagraphToJumbtron);

function addParagraphToJumbtron() {
  let jumbotron = document.querySelector(".jumbotron");
  let newPara = document.createElement("p");
  newPara.innerText = "Read more below.";
  jumbotron.appendChild(newPara);
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let largerLinksBtn = document.querySelector("#largerLinksBtn");

largerLinksBtn.addEventListener("click", () => {
  let links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.style.fontSize = "2em";
  });
});
