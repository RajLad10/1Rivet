    
async function addData()
{
    let response;

    try {
        response = await fetch('http://localhost:3000/test');
        let test = await response.json();
        displayData(test);
        console.log(test);
    } catch (error) {
        console.warn(error);
    }
}

function displayData(emp)
{
    emp.forEach(element => {

        for (const key in element) {
            console.log(key + ":" + element[key]);
        }});
}

function submitData() {

    var n = document.getElementById("name").value;
    var s = document.getElementById("salary").value;
    var c = document.getElementById("city").value;

    fetch('http://localhost:3000/test', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: n,
            age: s,
            email: c,
        })
    })
}