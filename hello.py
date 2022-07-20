
from flask import Flask,redirect
from flask import request
import json

app = Flask(__name__)

@app.route("/sum",methods=['GET', 'POST'])
def home():
    data=request.data
    datat=data.decode()
    person = json.loads(datat)
    # print(type(person))
    print(person['name'])
    
    return person['name']
@app.route("/",methods=['GET'])
def go():
    return 'hello ji'



    
if __name__ == "__main__":
    app.run(debug=True,port=3000)