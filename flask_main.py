import flask as fsk

app = fsk.Flask(__name__ , static_folder= 'build'  ,
                static_url_path='/')


# @app.route('/', defaults={'path': ''})
# @app.route('/<path:path>')
# def main(path):
#     if path != "" and os.path.exists("/static/" + path):
#         return fsk.send_from_directory('static', path)
#     else:
#         return fsk.send_from_directory('static', 'index.html')

@app.route('/')
def main():
    return fsk.send_from_directory('build' , 'index.html')


app.run()