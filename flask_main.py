import os
from flask import Flask, send_from_directory, request
from mongoDatabase import mongoDataBase


app = Flask(__name__, static_folder='build')


# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    ext = os.path.splitext(path)[1]
    mime = ''

    if ext == '.css':
        mime = 'text/css'
    if ext == '.js':
        mime = 'text/js'

    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path, mimetype=mime)
    else:
        return send_from_directory(app.static_folder, 'index.html')


@app.route('/signin/<email>/<password>/<semester>/<stream>/<branch>', methods=['POST'])  # url -
def newUser(email, password, semester, stream, branch):
    callback = mongoDataBase.addUsers(email , password , semester , stream , branch)
    return callback


@app.route('/test', methods=['GET'])
def runTest():
    return "CALLBACK ... RECEIVED"


if __name__ == '__main__':
    app.run(use_reloader=True, port=5000, threaded=True)
