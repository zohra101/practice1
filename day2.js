function practice1() {
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
        output(`${myString}, ${myNumber}, ${myBoolean}, "outputTag"`);
    }
}

//
function practice4() {
    debugger;
    const book1 = { 
            title: ["Dragonsong"],
            author: ["McCaffrey, Anne"],
            inStock: [true],
            quantity: [1],
    };

    const book2 = { 
        title: ["Dragonsinger"],
        author: ["McCaffrey, Anne"],
        inStock: [true],
        quantity: [1],
    };

    const books = [book1, book2]

    for (let index of books) {
        booksAvailable += books[index];
            for (let property in books[index]) {
                bookInfo += book[number].${property};
            }

    }
}