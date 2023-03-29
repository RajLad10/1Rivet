// Create element <table>
const table = document.createElement('table');
const body = document.querySelector('body');
body.appendChild(table);

// create <thead>
const thead = table.createTHead();

//  create <tr>
const theadRow = thead.insertRow();

// create <th>
var headRow = [{name : 'Name'},{organisation : 'Organisation'},{experience : 'Experience'}];

headRow.forEach(element => {
    let th = theadRow.insertCell();

    for (const key in element)
    {
        th.appendChild(document.createTextNode(Object.values(element)));
    } 
})

// create <tbody>
const tbody = table.createTBody();

// Giving border to table
table.setAttribute('border','2');

// 
var row = [{name : 'a',organisation : '1R',experience : 7},
{name : 'b',organisation : '1R',experience : 7},
{name : 'c',organisation : '1R',experience : 7},
];

row.forEach(element => {

    var tbodyRow4 = tbody.insertRow();
    for (const key of headRow)
    {
        let td = tbodyRow4.insertCell();
        td.appendChild(document.createTextNode(element[Object.keys(key)[0]]));
    } 
})