from flask import Flask, Response
import requests

app = Flask(__name__)


@app.route('/vehicles')
def get_vehicles():
    url = "http://livemap.awesome-gamerz.com:8000/livemap_dynamic.xml"
    response = requests.get(url)
    return Response(response.content, content_type="application/xml")


if __name__ == '__main__':
    app.run(debug=True, port=5000)
