from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/api/", methods=["GET"])
def hello_world():
    return "Aria", 200


if __name__ == "__main__":
    try:
        app.run(debug=True)
    except Exception as e:
        print(f"An error occurred: {e}")
