function practice1() {
    const grid1 = `<div class="container text-center m-3 p-5">
                            <div class="row">
                                <div class="col border border-2">Column 1</div>
                                <div class="col border border-2">Column 2</div>
                                <div class="col border border-2">Column 3</div>
                            </div>
                        </div>`;
    window.practiceOne.innerHTML = grid1;
}

function practice2() {
    debugger;
    let index = 0;
    let columnString = '';

        for (index < 3; index++;) {
            columnString += `<div class="col border border-2">Column ${index}</div>`
        }

    const rowString = `<div class="row">${columnString}</div>`;   
    const bootstrapGrid = `<div class="container text-center m-3 p-5">` + rowString;
    window.bootstrapGrid.innerHTML = bootstrapGrid;
}