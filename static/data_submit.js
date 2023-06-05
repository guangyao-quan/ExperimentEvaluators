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






