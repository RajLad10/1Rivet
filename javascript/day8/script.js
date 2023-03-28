// Create element <table>
const table = document.createElement('table');
const body = document.querySelector('body');
body.appendChild(table);

// create <thead>
const thead = table.createTHead();

//  create <tr>
const theadRow = thead.insertRow();

// create <th>
const th = (heading) => {
    let tablehead = document.createElement('th');
    theadRow.appendChild(tablehead).innerHTML = heading;
}

th("Name");
th("Organisation");
th("Experience");

// create <tbody>
const tbody = table.createTBody();


// create <tr> : Row 1
const tbodyRow1 = tbody.insertRow();


// create <td>
const td = (data,row) => {
    let td = row.insertCell().innerHTML = data;
    td.colSpan = 2;
}

td("Raj",tbodyRow1);
td("1Rivet",tbodyRow1);
td(1,tbodyRow1);


// create <tr> : Row 2
const tbodyRow2 = tbody.insertRow();

// create <td>
td("Vivek",tbodyRow2);
td("TCS",tbodyRow2);
td(3,tbodyRow2);


// create <tr> : Row 3
const tbodyRow3 = tbody.insertRow();

// create <td>
td("Mihir",tbodyRow3);
td("TCS",tbodyRow3);
td(2,tbodyRow3);


// Giving border to table
table.setAttribute('border','2');
