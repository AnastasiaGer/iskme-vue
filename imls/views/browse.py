from django.views.generic import View
from django.utils.decorators import method_decorator
from utils.decorators import login_required
from django.http import JsonResponse

from ..utils import load_dummy_data


class IMLSBrowseView(View):
    def post(self, request, *args, **kwargs):
        response = load_dummy_data("browse.json")
        return JsonResponse(response)

    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)
