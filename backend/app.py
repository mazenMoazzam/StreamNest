from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from React dev server

@app.route("/api/videos")
def get_videos():
    return jsonify([
        {"id": 1, "title": "How to cook rice", "url": "video1.mp4"},
        {"id": 2, "title": "Learn Flask in 10 minutes", "url": "video2.mp4"}
    ])

if __name__ == "__main__":
    app.run(debug=True)
