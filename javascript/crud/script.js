// Get table by ID
const table = document.getElementById('table');


// Create <thead>
const tHead = table.createTHead();


// Create <tr> in <thead>
const headRow = tHead.insertRow();


// Create <th>
var headings = [{ firstname: 'First Name' }, { lastname: 'Last Name' }, { email: 'Email' }, { phonenumber: 'Phone Number' }, { password: 'Password' }, { action: 'Action' }];

headings.forEach(element => {
    let th = headRow.insertCell();

    for (const key in element) {
        th.appendChild(document.createTextNode(Object.values(element)));
    }
})


// Create <tbody>
var tbody = table.createTBody();


// Get submit Button by ID
var submitBtn = document.getElementById('pushBtn');


// Show data in table on page load
document.body.onload = getData();


// Get data From Server (db.json)
async function getData() {
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

function displayData(emp) {
    table.removeChild(table.getElementsByTagName('tbody')[0]);
    tBody = table.createTBody();

    emp.forEach(item => {
        const tr = tBody.insertRow();

        for (const key of headings) {
            let td = tr.insertCell();
            if (key.action !== 'Action') {
                td.appendChild(document.createTextNode(item[Object.keys(key)]));
            }
            else {
                let editBtn = document.createElement('button');
                editBtn.innerText = 'Edit';
                editBtn.onclick = function () { editData(item) };

                let deleteBtn = document.createElement('button');
                deleteBtn.innerText = 'Delete';
                deleteBtn.onclick = function () { deleteData(item) };

                td.appendChild(document.innerHTML = editBtn);
                td.appendChild(document.innerHTML = deleteBtn);
            }
        }
    })
}


// Add data to server (db.json)
function pushData() {

    const firstname = document.getElementById("firstName").value;
    const lastname = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phonenumber = document.getElementById("phoneNumber").value;
    const password = document.getElementById("password").value;

    fetch('http://localhost:3000/test', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            email: email,
            phonenumber: phonenumber,
            password: password,
        })
    })
        .then(
            getData(),
            formReset()
        )
}


// Edit stored data
function editData(employee) {
    document.getElementById("firstName").value = employee.firstname;
    document.getElementById("lastName").value = employee.lastname;
    document.getElementById("email").value = employee.email;
    document.getElementById("phoneNumber").value = employee.phonenumber;
    document.getElementById("password").value = employee.password;

    let id = employee.id;

    submitBtn.onclick = async function () {
        fetch(`http://localhost:3000/test/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                firstname: document.getElementById("firstName").value,
                lastname: document.getElementById("lastName").value,
                email: document.getElementById("email").value,
                phonenumber: document.getElementById("phoneNumber").value,
                password: document.getElementById("password").value,
            })
        })
        await getData();
        await formReset();
    }
}


// Delete Stored Data
function deleteData(employee) {
    let id = employee.id;

    fetch(`http://localhost:3000/test/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    getData();
}


// Reset form 
function formReset() {
    document.getElementById("firstName").value = null;
    document.getElementById("lastName").value = null;
    document.getElementById("email").value = null;
    document.getElementById("phoneNumber").value = null;
    document.getElementById("password").value = null;
}



/* Form Validation */
var flag = 0;

function firstNameValidation() {
    let input = document.getElementById('firstName').value;
    let warningMessage = document.getElementById('firstName-warning');
    let regex = /^[A-Za-z]+$/;

    if (regex.test(input)) {
        warningMessage.style.display = "none";
        flag = 1;
    }
    else {
        warningMessage.style.display = "block";
        flag = 0;
    }
}

flag = 0;
function lastNameValidation() {
    let input = document.getElementById('lastName').value;
    let warningMessage = document.getElementById('lastName-warning');
    let regex = /^[A-Za-z]+$/;

    if (regex.test(input)) {
        warningMessage.style.display = "none";
        flag = 1;
    }
    else {
        warningMessage.style.display = "block";
        flag = 0;
    }
}

flag = 0;
function emailValidation() {
    let input = document.getElementById('email').value;
    let warningMessage = document.getElementById('email-warning');
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (regex.test(input)) {
        warningMessage.style.display = "none";
        flag = 1;
    }
    else {
        warningMessage.style.display = "block";
        flag = 0;
    }
}

flag = 0;
function phoneNumberValidation() {
    let input = document.getElementById('phoneNumber').value;
    let warningMessage = document.getElementById('phoneNumber-warning');
    let regex = /^[0-9]+$/;

    if (regex.test(input) && input.length == 10) {
        warningMessage.style.display = "none";
        flag = 1;
    }
    else {
        warningMessage.style.display = "block";
        flag = 0;
    }
}

flag = 0;
function passwordValidation() {
    let input = document.getElementById('password').value;
    let warningMessage = document.getElementById('password-warning');
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;

    if (regex.test(input)) {
        warningMessage.style.display = "none";
        flag = 1;
    }
    else {
        // if(input.length <= 8 || input.length >= 16)
        // {
        //     warningMessage.innerText = "Password should be between 8 to 16 characters*";
        // }
        // else
        // {
        //     warningMessage.innerText =  "Please use a strong password*";
        // }
        warningMessage.style.display = "block";
        flag = 0;
    }
    // console.log(flag);

}


function submit() {
    if (flag == 1) {
        document.getElementById('pushBtn').style.display = "none";
    }
    else {
        document.getElementById('pushBtn').style.display = "block";
    }
}
