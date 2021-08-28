import pymongo as pg
import re
import json
from bson import json_util
from bson.objectid import ObjectId

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

def checkExistance(email):
    users = getUsers()
    data = users.find_one({'email':email} , {'_id':0})
    if data is not None:
        return True
    else : return False


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
    cols = getNotes().aggregate([
            {"$match" : {"semester" : semester, "stream": stream}},
            {"$group": {"_id" : {"subject":"$subject", "code":"$code"}}},
            {"$project" : {"_id":0, "subject":"$_id.subject", "code":"$_id.code"}}
        ])
    data = []
    for i in cols:
        #val = json.loads(json_util.dumps(i['_id']))
        #i['_id'] = val['$oid']
        data.append(i)

    js = {
        'data': data
    }
    print(data)
    return js

def getLinks(subject):
    links = getNotes().find({}, {'_id':0, 'subject':1,'code':subject, 'unit': 1, 'contents': 1, 'topic': 1}).sort('unit', 1)
    data = []
    for i in links:
        data.append(i)
    res ={'data' : data}
    print(res);
    return res

def searchNotes(keyword):
    # notes = getNotes()
    # data = getNotes().find({} , {'topic':1 , '_id': 1})
    cols = getNotes().find({'topic': {'$regex': re.compile(keyword, re.IGNORECASE)}}, {'_id': 0})
    data = []

    for i in cols:
        data.append(i)

    json = {
        'data': data
    }

    return json


def dropNotes(topic, link):
    notes = getNotes()
    notes.delete_one({'topic': topic, 'link': link})
    return "success"
