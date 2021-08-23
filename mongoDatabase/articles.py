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

articles = "articles"

def getRoots():
    return client.get_database(database)

def getArticles():
        return getRoots().get_collection(articles)

def uploadArticles(data):
    cloudinary.config(cloud_name = "sristspace", api_key = "879963674368385", api_secret = "TiBlP74DD9AxmdTqK8r1oOWCPQE")
    image_url = None
    cap_image = 0
    for i in data['article']:
        if 'image' in i.keys():
            image_url = cloudinary.uploader.upload(i['image'])
            i['image'] = image_url['url']
            if(cap_image == 0):
                data['cap_image'] = image_url['url'];
    getArticles().insert_one(data)
    return "success"

def fetchTrendingArticles():
    articles = getArticles().find({}, {'article' : 0}).sort('likes',-1).limit(6)
    data = []
    for i in articles:
        val = json.loads(json_util.dumps(i['_id']))
        i['_id'] = val['$oid']
        data.append(i)
    res ={'data' : data}
    print(res);
    return res

def fetchPage(page):
    skip = int(page) * 5
    articles = getArticles().find({}, {'article': 0}).skip(skip).limit(5)
    print( page * 5 + " is skipped")
    data = []
    for i in articles:
        val = json.loads(json_util.dumps(i['_id']))
        i['_id'] = val['$oid']
        data.append(i)
    res = {'data' : data}
    print(res)
    return res

def getbyid(_id):
    article = getArticles().find({'_id' : ObjectId(_id)}, {'_id' : 0})
    return article[0]

