const table = document.getElementById('table');

const tHead = table.createTHead();

const headRow = tHead.insertRow();

var headings = [{name : 'Name'},{age : 'Age'},{email : 'Email'}];

headings.forEach(element => {
    let th = headRow.insertCell();

    for (const key in element) {
        th.appendChild(document.createTextNode(Object.values(element)));
    }
})

const tBody = table.createTBody();


async function getEmployees()
{
    let response;

    try {
        response = await fetch('http://localhost:3000/employees');
        let employees = await response.json();
        createTableBody(employees);
        console.log(employees);
    } catch (error) {
        console.error(error);
    }
}

function addEmployees() {
    fetch('http://localhost:3000/employees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Raj',
            age: 23,
            email: 'raj@gmail.com'
        })
    })
}

function createTableBody(employees)
{
    employees.forEach(item => {
        let tr = tBody.insertRow();

        // headings.forEach(header => {
        //     const key = Object.keys(header)[0];
        //     const td = tr.insertCell();
        //     td.appendChild(document.createTextNode(item[key]));
        // })
        for (const key of headings)
        {
            let td = tr.insertCell();
            td.appendChild(document.createTextNode(item[Object.keys(key)]));
        }  
    })
}
