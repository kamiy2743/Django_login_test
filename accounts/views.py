from django.shortcuts import render
import json

def index(request):
    data = {
        "is_autholized" : request.user.is_authenticated
    }
    json_data = json.dumps(data)

    return render(request, "top.html", {"json_data" : json_data})
