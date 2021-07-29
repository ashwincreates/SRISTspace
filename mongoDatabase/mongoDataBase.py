import pymongo as pg

path = "mongodb+srv://utkarsh:utkarsh123456@sristspace.lyx27.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
database = "sristspacedb"

client = pg.MongoClient(path)

users = "users"
notes = "notes"


# get database
def getRoots():
    return client.get_database(database)


# getters

def getUsers():
    return client.get_database(database).get_collection(users)


def getNotes():
    return client.get_database(database).get_collection(notes)


# add new sign in...
def addUsers(email, password, semester, stream, branch):
    json = {
        'email': email,
        'password': password,
        'semester': semester,
        'stream': stream,
        'branch': branch
    }

    data = getUsers().find_one({'email': email}, {'_id': 0})
    if data is not None:
        return 'user exists'
    else:
        getUsers().insert_one(json)
        return 'submit'


# login ...
def getUserDetail(email, password):
    users = getUsers()
    data = users.find_one({'email': email, 'password': password}, {'_id': 0})
    if data is not None:
        return data
    else:
        return 'user does not exists'


# notes init
def addNotes(topic, link, uploadDate, subject, semester, stream):
    json = {
        'topic': topic,
        'link': link,
        'upload': uploadDate,
        'subject': subject,
        'semester': semester,
        'stream': stream
    }
    data = getNotes().find_one({'link': link}, {'_id': 0})
    if data is not None:
        return 'notes exist'
    else:
        getNotes().insert_one(json)
        return "submit"


def fetchNotes(semester, stream):  # via drop downs
    notes = getNotes()
    cols = getNotes().find({'semester': {'$in':semester}, 'stream': {'$in':stream}})
    data = ''
    for i in cols:
        data+=str(i)

    if data is not None:
        return str(data)
    else:
        return "no notes"


def dropNotes(topic, link):
    notes = getNotes()
