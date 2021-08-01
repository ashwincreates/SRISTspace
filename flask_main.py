import os
from flask import Flask, send_from_directory, request, jsonify
from mongoDatabase import mongoDataBase
from flask_cors import CORS


app = Flask(__name__, static_folder='build')
CORS(app)


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


# url - https://sristspace.herokuapp.com/adduser/email/pass/sem/stream/branch
@app.route('/adduser/<email>/<password>/<semester>/<stream>/<branch>', methods=['POST', 'GET'])
def newUser(email, password, semester, stream, branch):
    callback = mongoDataBase.addUsers(email, password, semester, stream, branch)
    return callback


# url - https://sristspace.herokuapp.com/getuser/email/pass
@app.route('/getuser/<email>/<password>', methods=['GET'])
def getUserData(email, password):
    return jsonify(mongoDataBase.getUserDetail(email, password))


# url - https://sristspace.herokuapp.com/addNotes/Java/ref-oracle/date/sub/sem/stream
@app.route('/addNotes/<topic>/<link>/<date>/<subject>/<semester>/<stream>')
def addNotes(topic, link, date, subject, semester, stream):
    callback = mongoDataBase.addNotes(topic, link, date, subject, semester, stream)
    return callback


# url - https://sristspace.herokuapp.com/getNotesByDrop/sem/stream
@app.route('/getNotesByDrop/<semester>/<stream>')
def getNotes(semester, stream):
    return jsonify(mongoDataBase.fetchNotes(semester, stream))


# url - https://sristspace.herokuapp.com/dropNotes/topic/ref
@app.route('/dropNotes/<topic>/<link>')
def dropNotes(topic, link):
    callback = mongoDataBase.dropNotes(topic, link)
    return callback


@app.route('/getNotesBySearch/<keyword>')
def getNotesSearch(keyword):
    callback = mongoDataBase.searchNotes(keyword)
    return jsonify(callback)


@app.route('/test', methods=['GET'])
def runTest():
    return "CALLBACK ... RECEIVED"


if __name__ == '__main__':
    app.run(use_reloader=True, port=5000, threaded=True)
