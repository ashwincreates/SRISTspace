import pymongo as pg
import re
import json
import cloudinary
import cloudinary.api
import cloudinary.uploader
from bson import json_util


path = "mongodb+srv://utkarsh:utkarsh123456@sristspace.lyx27.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
database = "sristspacedb"

client = pg.MongoClient(path)

articles = "articles"

def getRoots():
    return client.get_database(database)

def getArticles():
        return getRoots().get_collection(articles)

def uploadArticles(data):
    cloudinary.config(cloud_name = "sristspace", api_key = "879963674368385", api_secret = "TiBlP74DD9AxmdTqK8r1oOWCPQE")
    image_url = None
    for i in data['article']:
        if 'image' in i.keys():
            image_url = cloudinary.uploader.upload(i['image'])
            i['image'] = image_url['url']
    getArticles().insert_one(data)
    return "success"

def fetchArticles():
    articles = getArticles().find({})
    data = []
    for i in articles:
        val = json_util.dumps(i['_id'])
        i['_id'] = val
        data.append(i)
    res ={'data' : data}
    return res

