import pymongo as pg

path = ""
database = ""

client = pg.MongoClient(path)


# get database
def getRoots():
    return client.get_database(database)
