const table = document.getElementById('table');
const tHead = table.createTHead();

const headRow = tHead.insertRow();

var headings = [{name : 'Name'},{salary : 'Salary'},{city : 'City'}];

headings.forEach(element => {
    let th = headRow.insertCell();

    for (const key in element) {
        th.appendChild(document.createTextNode(Object.values(element)));
    }
})

const tBody = table.createTBody();


async function getData()
{
    let response;

    try {
        response = await fetch('http://localhost:3000/test');
        let test = await response.json();
        displayData(test);
        // console.log(test);
    } catch (error) {
        console.warn(error);
    }
}

function displayData(emp)
{
    emp.forEach(item => {
        let tr = tBody.insertRow();

        for (const key of headings)
        {
            let td = tr.insertCell();
            td.appendChild(document.createTextNode(item[Object.keys(key)]));
        }  
    })

    // emp.forEach(element => {
    //     let tr = tBody.insertRow();

    //     for (const key in element) {
    //         console.log(key + ":" + element[key]);
    //     }});
}

function pushData() {

    var name = document.getElementById("name").value;
    var salary = document.getElementById("salary").value;
    var city = document.getElementById("city").value;

    fetch('http://localhost:3000/test', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            salary: salary,
            city: city,
        })
    })
}