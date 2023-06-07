from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/data_process', methods=['POST'])
def data_process():
    json_data = request.get_json()
    response = {'message': 'Data received and processed successfully'}
    return jsonify(response)

@app.route('/data_return', methods=['GET'])
def data_return():
    json_data = {
        'question': 'well done',
        'hypothesis': 'well done',
        'material': 'well done',
        'implementation': 'well done',
        'observation': 'well done',
        'result': 'well done'
    }
    return jsonify(json_data)

if __name__ == '__main__':
    app.run()
