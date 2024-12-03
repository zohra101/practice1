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