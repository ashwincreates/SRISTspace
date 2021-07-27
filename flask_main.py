from flask import (Flask, render_template)

app = Flask(__name__)


# @app.route('/', defaults={'path': ''})
# @app.route('/<path:path>')
# def main(path):
#     if path != "" and os.path.exists("/static/" + path):
#         return fsk.send_from_directory('static', path)
#     else:
#         return fsk.send_from_directory('static', 'index.html')

@app.route('/')
def main():
    return render_template("index.html") 


if __name__ == "__main__":
 app.run(host="0.0.0.0" , port=8080)
