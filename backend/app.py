from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:Nezam1234%23%25@localhost:5434/streamnest_db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

class Video(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    url = db.Column(db.String(200), nullable=False)

    def __repr__(self):
        return f"<Video {self.title}>"




@app.route("/api/testdb")
def test_db():
    if not Video.query.filter_by(title="Test Video").first():
        test_video = Video(title="Test Video", url="test_video.mp4")
        db.session.add(test_video)
        db.session.commit()
    videos = Video.query.all()
    return jsonify([{"id": v.id, "title": v.title, "url": v.url} for v in videos])

if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)
