class Column {
    openingTag = `"<div class = 'col' >"`;
    closingTag = `"</div>"`;
    innerHTML = `""`;
}

function practice1() {
    const grid1 = `<div class="container text-center m-3 p-5">
                            <div class="row">
                                <div class="col border border-2">Column 1</div>
                                <div class="col border border-2">Column 2</div>
                                <div class="col border border-2">Column 3</div>
                            </div>
                        </div>`;
    window.outputTag1.innerHTML = grid1;
}

function practice2() {
    let columnString2 = "";

        for (row =0; row < 1; row++) {
            for (col=0; col < 3; col++) {
                columnString2 += `<div class="col border border-2">Column ${col}</div>`
            }
            const rowString2 =`<div class="row">${columnString2}</div>`;   
            const bootstrapGrid = `<div class="container text-center m-3 p-5">` + rowString2;
        window.outputTag2.innerHTML = bootstrapGrid;
        }
 }
          
function practice3() {
debugger;
let rowString3 = "";
let columnString3 = "";

    for (let row =0; row < 3; row++) {
        for (let col=0; col < 3; col++) {
           columnString3 += `<div class="col border border-2">Column ${col}</div>`;   
            }
        rowString3 +=`<div class="row">${columnString3}</div>`;
        columnString3 = "";
        }
        window.outputTag3.innerHTML += `<div class="container text-center m-3 p-5">${rowString3}</div>`;
}

function practice3b() {
    debugger;

    let rows = "";
    for (let rowNumber = 1; rowNumber <= 3; rowNumber++) {
        let columns = "";
        for (let columnNumber = 1; columnNumber <= 3; columnNumber++) {
            columns += `<div class="col">COLUMN ${columnNumber}</div>`;
        }

        rows += `<div class="row">${columns}</div>`;
    }

    const gridSystem = `
        <div class="container">
            ${rows}
            </div>`;
    output (gridSystem, "outputTag3");
} 

function practice4() {
    debugger;

    let rows = "";
    for (let rowNumber = 1; rowNumber <= 3; rowNumber++) {
        let columns = "";
        for (let columnNumber = 1; columnNumber <= 3; columnNumber++) {
            const column = new Column;
            column. innerHTML = `COLUMN ${columnNumber}`;
            columns += `${column.openingTag}${column.innerHTML}${column.closingTag}`;
        }

        rows += `<div class="row">${columns}</div>`;
    }

    const gridSystem = `
        <div class="container">
            ${rows}
            </div>`;
    output (gridSystem, "outputTag3");
} 