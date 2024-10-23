const apiUrl = 'http://localhost:8089/api'; // API base URL

// GET to get all people
async function getData() {
    try {
        const response = await fetch(`${apiUrl}/person`); // Endpoint GET para obtener personas
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const data = await response.json();
        document.getElementById('getResponse').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('getResponse').innerText = `Error: ${error.message}`;
    }
}

// POST to create a new person
async function postData() {
    const person = {
        curp: document.getElementById('curp').value,
        name: document.getElementById('name').value,
        fatherSurname: document.getElementById('fatherSurname').value,
        motherSurname: document.getElementById('motherSurname').value,
        fingers: document.getElementById('fingers').value
    };

    try {
        const response = await fetch(`${apiUrl}/person`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(person)
        });
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const result = await response.json();
        document.getElementById('postResponse').innerText = JSON.stringify(result, null, 2);
    } catch (error) {
        document.getElementById('postResponse').innerText = `Error: ${error.message}`;
    }
}

// PUT o update a person's data
async function putData() {
    const id = document.getElementById('putId').value; // ID of the person to update
    const updatedPerson = {
        curp: document.getElementById('curpPut').value,
        name: document.getElementById('namePut').value,
        fatherSurname: document.getElementById('fatherSurnamePut').value,
        motherSurname: document.getElementById('motherSurnamePut').value,
        fingers: document.getElementById('fingersPut').value
    };

    try {
        const response = await fetch(`${apiUrl}/person/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedPerson)
        });
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const result = await response.json();
        document.getElementById('putResponse').innerText = JSON.stringify(result, null, 2);
    } catch (error) {
        document.getElementById('putResponse').innerText = `Error: ${error.message}`;
    }
}

// DELETE to remove a person by their ID
async function deleteData() {
    const id = document.getElementById('deleteId').value; // ID of the person to be eliminated

    try {
        const response = await fetch(`${apiUrl}/person/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        document.getElementById('deleteResponse').innerText = `Persona con ID ${id} eliminada correctamente.`;
    } catch (error) {
        document.getElementById('deleteResponse').innerText = `Error: ${error.message}`;
    }
}

// POST to perform login (SESSION CONTROLLER)
async function login() {
    const credentials = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    try {
        const response = await fetch(`${apiUrl}/session/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const result = await response.json();
        document.getElementById('loginResponse').innerText = JSON.stringify(result, null, 2);
    } catch (error) {
        document.getElementById('loginResponse').innerText = `Error: ${error.message}`;
    }
}
