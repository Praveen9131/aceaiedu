from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app, resources={r"/apply": {"origins": "*"}})  # Adjust for production

DATA_FILE = 'applications.json'

def save_application(data):
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'r') as f:
            try:
                applications = json.load(f)
            except json.JSONDecodeError:
                applications = []
    else:
        applications = []

    applications.append(data)

    with open(DATA_FILE, 'w') as f:
        json.dump(applications, f, indent=4)

@app.route('/apply', methods=['POST', 'OPTIONS'])
def apply():
    if request.method == 'OPTIONS':
        return '', 200
    try:
        if not request.is_json:
            app.logger.error('Invalid Content-Type: %s', request.headers.get('Content-Type'))
            return jsonify({'error': 'Content-Type must be application/json'}), 400

        data = request.get_json()
        app.logger.debug('Received data: %s', data)

        name = data.get('name')
        phone = data.get('phone')
        email = data.get('email')
        course = data.get('course')

        missing_fields = [f for f, v in {'name': name, 'phone': phone, 'email': email, 'course': course}.items() if not v]
        if missing_fields:
            app.logger.error('Missing fields: %s', missing_fields)
            return jsonify({'error': f'Missing required fields: {", ".join(missing_fields)}'}), 400

        if '@' not in email or '.' not in email:
            app.logger.error('Invalid email: %s', email)
            return jsonify({'error': 'Invalid email format'}), 400

        if not phone.replace('+', '').isdigit() or len(phone.replace('+', '')) < 10:
            app.logger.error('Invalid phone: %s', phone)
            return jsonify({'error': 'Invalid phone number (must be 10-15 digits)'}), 400

        application_data = {
            'name': name,
            'phone': phone,
            'email': email,
            'course': course
        }
        save_application(application_data)

        app.logger.info('Application received and saved: %s', application_data)
        return jsonify({'message': f'Application for {course} received'}), 200

    except ValueError as e:
        app.logger.error('JSON parsing error: %s', str(e))
        return jsonify({'error': f'Invalid JSON: {str(e)}'}), 400
    except Exception as e:
        app.logger.error('Server error: %s', str(e))
        return jsonify({'error': f'Server error: {str(e)}'}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
