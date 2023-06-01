var xhr = new XMLHttpRequest();
xhr.open('GET', 'url_to_server_endpoint', true);
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            // process the JSON data received from the server
            console.log(response);
        } else {
            console.error('Request failed. Status:', xhr.status);
        }
    }
};

xhr.send();


/*

from flask import Flask, request, jsonify

app = Flask(__name__)

# /submit-form URL, route listens for POST requests to the URL
@app.route('/submit-form', methods=['POST'])
def submit_form():
    # form_data is a dictionary, extract data from the request
    form_data = request.form

    # TODO: process form_data
    # ... calling a model to evaluate the experiment results
    # ... saving the results to 'results'
    response_data = {'results': 'results'}

    # return the response data as JSON
    return jsonify(response_data)

*/