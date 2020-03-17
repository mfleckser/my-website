from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///test.db"
db = SQLAlchemy(app)

class User(db.Model):
	id = db.Column(db.Integer, primary_key = True)
	username = db.Column(db.String(30), nullable = False)
	name = db.Column(db.String(30), nullable = False)
	password = db.Column(db.String(30), nullable = False)
	platformer = db.Column(db.Integer, nullable = False, default = 9999999999999)
	minesweeper = db.Column(db.Integer, nullable = False, default = 9999999999999)
	space_invaders = db.Column(db.Integer, nullable = False, default = -1)
	snake = db.Column(db.Integer, nullable = False, default = -1)

	def __repr__(self):
		return "<User %r>" % self.id

@app.route("/")
def Start():
	return render_template("Start.html")

@app.route("/signup")
def signup():
	return render_template("signup.html")

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
