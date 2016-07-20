import requests
import json

class Response(object):
    def __init__(self, go_online, go_response, go_idle, go_uptime_hour,ptc_online, ptc_response, ptc_idle, ptc_uptime_hour):
        self.go_online = go_online
        self.go_response = go_response
        self.go_idle = go_idle
        self.go_uptime_hour = go_uptime_hour
        self.ptc_online = ptc_online
        self.ptc_response = ptc_response
        self.ptc_idle = ptc_idle
        self.ptc_uptime_hour = ptc_uptime_hour


from getpass import getpass
# Definimos la URL
url = "https://go.jooas.com/status"

cabecera1 = {'Content-type': 'application/json'}
#datos = '{"auth":{"passwordCredentials":{"username": "%s", "password": "%s"}, "tenantName":"%s"}}' % (user, passwd, proy)
solicitud = requests.post(url, headers = cabecera1)
if solicitud.status_code == 200:
    json_response = json.loads(solicitud.text)
    response = Response(**json_response)

    #print (solicitud.text)
    if response.go_online == True:
        print("Pokemon Go esta online")
    else:
        print("Pokemon Go esta OffLine")
else:
    print("HA OCURRIDO UN ERROR CON LA PETICION",solicitud.status_code)