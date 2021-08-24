import os
from flask import Flask, send_from_directory, request, jsonify
from mongoDatabase import mongoDataBase
from mongoDatabase import articles
from mongoDatabase import event
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv
import functools
import jwt

app = Flask(__name__, static_folder='build')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SECRET_KEY'] = '$ri$t$p@ceKey'
# CORS(app)

load_dotenv()
env = os.environ.get("ENV")
if(env == "production"):
    port = os.environ.get("PORT")
else:
    port = 5000

print("the current environment is : " + env)

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


#JWT authentication
def checkForToken(f):
    @functools.wraps(f)
    def decorator(*args,**kwargs):
        AuthToken = None

        if 'x-access-token' in request.headers:
            AuthToken = request.headers['x-access-token']
        else : return 'user not verified'

        decrypt = jwt.JWT.decode(AuthToken , app.config['SECRET_KEY'])
        if mongoDataBase.checkExistance(decrypt['email']) :
            return f(decrypt['email'] , *args , **kwargs)
    return decorator


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

@app.route('/uploadArticles', methods=['POST'])
def ReceiveArticles():
    message = articles.uploadArticles(request.json)
    return jsonify(message)

@app.route('/fetchTrendingArticles', methods=['GET'])
def FetchArticles():
    data = articles.fetchTrendingArticles()
    return jsonify(data)

@app.route("/fetchArticles/<page>", methods=['GET'])
def FetchPage(page):
    data = articles.fetchPage(page)
    return jsonify(data)

@app.route('/uploadEvent', methods=['POST'])
def ReceiveEvents():
    message = event.uploadEvent(request.json)
    return jsonify(message)

@app.route('/fetchEvents', methods=['GET'])
def FetchEvents():
    data = event.fetchEvents()
    return jsonify(data)

@app.route('/getArticles/<_id>', methods=['GET'])
def Get(_id):
    data = articles.getbyid(_id)
    return jsonify(data)

if __name__ == '__main__':
    app.run(use_reloader=True, port=port, threaded=True)
