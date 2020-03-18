from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///users.db"
db = SQLAlchemy(app)

class User(db.Model):
	id = db.Column(db.Integer, primary_key = True)
	username = db.Column(db.String(64), nullable = False, unique = True)
	name = db.Column(db.String(64), nullable = False)
	password_hash = db.Column(db.String(128))
	platformer = db.Column(db.Integer, nullable = False, default = 9999999999999)
	minesweeper = db.Column(db.Integer, nullable = False, default = 9999999999999)
	space_invaders = db.Column(db.Integer, nullable = False, default = -1)
	snake = db.Column(db.Integer, nullable = False, default = -1)

	def __repr__(self):
		return "<User %r>" % self.id

	def set_password(self, password):
		self.password_hash = generate_password_hash(password)

	def check_password(self, password):
		return check_password_hash(self.password_hash, password)

@app.route("/",methods=["POST","GET"])
def Start():
	if request.method == "POST":
		pass
	return render_template("Start.html",failed=False)

@app.route("/signup",methods=["POST","GET"])
def signup():
	if request.method == "POST":
		pass
	return render_template("signup.html",message="")

@app.route("/calculator")
def calculator():
	return render_template("Caclulator.html")

@app.route("/home")
def home():
        return render_template("home.html")

@app.route("/minesweeper")
def minesweeper():
        return render_template("minesweeper.html")

@app.route("/platformer")
def platformer():
        return render_template("platformer.html")

@app.route("/snake")
def snake():
        return render_template("snake.html")

@app.route("/space-invaders")
def space_invaders():
        return render_template("space_invaders.html")

if __name__ == "__main__":
	app.run(debug=True)
