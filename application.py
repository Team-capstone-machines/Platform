#!/usr/bin/python3

import requests

HEADERS = {
    "Content-Type": "application/json",
    "NUFI-API-KEY": "40fb302751d74a6d8122afe2b5cb8b1a"
}
BODY = "{\"nombre\":\"TATIANA\", \"apellidos\": \"IVANENKO\", \"sexo\": \"\"}"

req = requests.post('https://nufi.azure-api.net/ficharoja/v2/consultar', headers=HEADERS, data=BODY)
print(req.text)
