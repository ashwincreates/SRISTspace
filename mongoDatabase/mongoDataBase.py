import pymongo as pg

path = "mongodb+srv://utkarsh:utkarsh123456@sristspace.lyx27.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
database = "sristspacedb"

client = pg.MongoClient(path)

users = "users"


# get database
def getRoots():
    return client.get_database(database)


def getUsers():
    return client.get_database(database).get_collection(users)


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


def getUserDetail(email , password):
    users = getUsers()
    data = users.find_one({'email': email , 'password': password}, {'_id': 0})
    if data is not None:
        return data
    else:
        return 'user does not exists'
