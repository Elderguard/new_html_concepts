from flask import Flask, render_template, make_response

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/hobbies")
def hobbies():
    return render_template('hobbies.html')

@app.route("/projects")
def projects():
    return render_template('projects.html')

@app.route("/certifications")
def certifications():
    return render_template('certifications.html')

if __name__ == "__main__":
    # Render expects the app to bind to 0.0.0.0 and use PORT env var
    import os
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)