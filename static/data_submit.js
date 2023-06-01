function sendData() {
    var questionInput = document.getElementById("question").value;
    var hypothesisInput = document.getElementById("hypothesis").value;
    var materialInput = document.getElementById("material").value;
    var implementationInput = document.getElementById("implementation").value;
    var observationInput = document.getElementById("observation").value;
    var resultInput = document.getElementById("result").value;

    var data = {
        question: questionInput,
        hypothesis: hypothesisInput,
        material: materialInput,
        implementation: implementationInput,
        observation: observationInput,
        result: resultInput
    };

    var jsonData = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'url_to_server_endpoint', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(jsonData);
}

/*

// add an event listener to the form submit event
const form = document.querySelector('#experimentForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);

    // get the form input elements
    const hypothesisInput = document.querySelector('#hypothesis');
    const hypothesisValue = hypothesisInput.value.trim();

    const materialsInput = document.querySelector('#materials');
    const materialsValue = materialsInput.value.trim();

    const implementationInput = document.querySelector('#implementation');
    const implementationValue = implementationInput.value.trim();

    const observationInput = document.querySelector('#observation');
    const observationValue = observationInput.value.trim();

    const resultInput = document.querySelector('#result');
    const resultValue = resultInput.value.trim();
    
    // validate the form data
    if (hypothesisValue === '') {
        const errorDiv = document.querySelector('div');
        errorDiv.textContent = 'Hypothesis cannot be empty';
        errorDiv.classList.add('error');
        form.appendChild(errorDiv);
        return;
    }

    if (materialsValue === '') {
        const errorDiv = document.querySelector('div');
        errorDiv.textContent = 'Materials cannot be empty';
        errorDiv.classList.add('error');
        form.appendChild(errorDiv);
        return;
    }

    if (implementationValue === '') {
        const errorDiv = document.querySelector('div');
        errorDiv.textContent = 'Implementation cannot be empty';
        errorDiv.classList.add('error');
        form.appendChild(errorDiv);
        return;
    }

    if (observationValue === '') {
        const errorDiv = document.querySelector('div');
        errorDiv.textContent = 'Observation cannot be empty';
        errorDiv.classList.add('error');
        form.appendChild(errorDiv);
        return;
    }

    if (resultValue === '') {
        const errorDiv = document.querySelector('div');
        errorDiv.textContent = 'Result cannot be empty';
        errorDiv.classList.add('error');
        form.appendChild(errorDiv);
        return;
    }

    // send the form data to the server, create an HTTP request object, handle
    // the response from the server and errors
    const url = 'http://localhost:3000/submit-form'; //replace with actual server URL

    fetch(url, {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // TODO: do something with the response
            console.log(data);
        })
        .catch(error => {
            // TODO: handle the error
            console.error(error);
        });
    
});

*/







