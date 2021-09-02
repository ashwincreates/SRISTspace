import pymongo as pg
import re
import json
import cloudinary
import cloudinary.api
import cloudinary.uploader
from bson import json_util
from bson.objectid import ObjectId
path = "mongodb+srv://utkarsh:utkarsh123456@sristspace.lyx27.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
database = "sristspacedb"

client = pg.MongoClient(path)

events = "events"

def getRoots():
    return client.get_database(database)

def getEvents():
        return getRoots().get_collection(events)

def uploadEvent(data):
    cloudinary.config(cloud_name = "sristspace", api_key = "879963674368385", api_secret = "TiBlP74DD9AxmdTqK8r1oOWCPQE")
    if(data['image'] != None):
        image_url = cloudinary.uploader.upload(data['image'])
        data['image'] = image_url['url']
    getEvents().insert_one(data)
    return "event added"

def fetchEvents():
    events = getEvents().find({})
    data = []
    for i in events:
        val = json.loads(json_util.dumps(i['_id']))
        i['_id'] = val['$oid']
        data.append(i)
    res ={'data' : data}
    return res

def updateEvent(_id, count):
    print("Updating....")
    event = getEvents().update(
                {"_id" : ObjectId(_id)},
                {"$set" : {"likes" : count}}
            )
    print(event)
