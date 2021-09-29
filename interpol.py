#!/usr/bin/python3


from flask import Flask, render_template, request, redirect, url_for
import requests
import json

app = Flask(__name__)

@app.route('/')
def _html():
    return render_template('index.html')

@app.route('/', methods=['POST', 'GET'], strict_slashes=False)
def _html_post():
    if request.method == 'POST':
        name = request.form['nm']
        last = request.form['ap']
        sx = request.form['sx']
        HEADERS = {
            "Content-Type": "application/json",
            "NUFI-API-KEY": "40fb302751d74a6d8122afe2b5cb8b1a"
        }
        BODY = "{\"nombre\":\"" + name + "\", \"apellidos\": \"" + last + "\", \"sexo\": \"" + sx + "\"}"
        req = requests.post('https://nufi.azure-api.net/ficharoja/v2/consultar', headers=HEADERS, data=BODY)
        if req.json()['status'] == 'success':
            return render_template('index.html', req_success=req.json())
        else:
            return render_template('index.html', req_no_content=req.json())

if __name__ == "__main__":
    app.run(host='0.0.0.0', port='5000', debug=True)
