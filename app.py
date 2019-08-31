from flask import Flask
from router import router

app = Flask('treatment')

app.register_blueprint(router)

# app.run('localhost', 80, use_reloader=True)