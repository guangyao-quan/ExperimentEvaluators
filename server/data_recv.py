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