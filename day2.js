function practice1() {
    debugger;
    const book = ["Dragonsong", "McCaffrey","Anne", true, 2];

let index=0;
let bookInfo="";

for (let len = book.length; index < len; index++) {
    bookInfo += book[index] + "<br>";
    }
    document.write("Practice 1:<br>" + bookInfo);
}

function practice2() {
    debugger;
const book1 = {title: "Dragonsong", authorLast: "McCaffrey", authorFirst:"Anne", inStock: true, quantity: 2};
const book2 = {title: "Dragonsinger", authorLast: "McCaffrey", authorFirst:"Anne", inStock: true, quantity: 3};
const book3 = {title: "Dragondrums", authorLast: "McCaffrey", authorFirst:"Anne", inStock: false, quantity: 0};

const books = [book1, book2, book3]

    let index=0;
    let bookInfo = "";
    
    for (let len = books.length; index < len; index++) {
        bookInfo += `Name: ${books[index].title}<br> 
        Author: ${books[index].authorLast}, ${books[index].authorFirst}<br>
        In Stock: ${books[index].inStock}<br>
        Quantity: ${books[index].quantity}<br><br>`;
        }
    document.write(bookInfo);
}

//Practice 2 wih bracket notation
function practice3() {
    const myObject = {
        property1: ["Dragonsong", 2, true],
        property2: ["Dragonsinger", 3, true],
        property3: ["Dragondrums", 0, false],
    };

    for (let propertyNumber = 1; propertyNumber <=3; propertyNumber++) {
        const propertyName = `property${propertyNumber}`;
        const array = myObject[propertyName];
        const myString = array[0];
        const myNumber= array[1];
        const myBoolean = array[2];
        output(`${myString}, ${myNumber}, ${myBoolean}`);
    }
}

// 1. Create a function called practice4
// 2.Use for in to loop through object properties
// 3.Use for of to loop through array items
// 4. Use nested loops to display each item
function practice4() {
    debugger;
    const books = {
        One: ["Dragonsong", "McCaffrey Anne", true, 1],
        Two: ["Dragonsinger", "McCaffrey Anne", true, 2],
        Three: ["Dragondrums", "McCaffrey Anne", false, 0],
    };

    for (let bookNumber in books) {
        const booksArray = books[bookNumber];
        output(`Book ${bookNumber}  is`, "outputTag");

            for (let item of booksArray) {
                output(` ${item}, `, "outputTag");
            }
        output("<br>", "outputTag");    
    } 
}  