from flask import Flask, jsonify

app = Flask(__name__)

# Endpoint to save notes
@app.route('/notes', methods=['POST'])
def save_note():
    from flask import Flask, request, jsonify
    # Here, you can save the note to a database
    return jsonify({'message': 'Note saved successfully'})

# Endpoint to retrieve notes
@app.route('/notes', methods=['GET'])
def get_notes():
    # Here, you can fetch notes from the database
    # For simplicity, I'm returning a dummy response
    notes = [
        {'title': 'Note 1', 'content': 'Content 1'},
        {'title': 'Note 2', 'content': 'Content 2'}
    ]
    return jsonify(notes)

# Endpoint to retrieve data
@app.route('/api/data', methods=['GET'])
def get_data():
    # Fetch data from a database or external source
    data = {'message': 'Hello from the backend!'}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
