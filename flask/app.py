from flask import Flask
import get

app = Flask(__name__)

@app.route('/')
def index():
    return "hello"
    
@app.route('/getsomething/<int:kappa>')
def getsomething(kappa):
    return str(get.returnsomething(kappa))
    
    
if __name__ == "__main__":
    app.run(host="0.0.0.0",port=8080, debug=True)