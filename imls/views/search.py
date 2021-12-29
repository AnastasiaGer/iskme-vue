from django.views.generic import View
from django.utils.decorators import method_decorator
from utils.decorators import login_required
from django.http import JsonResponse

from ..utils import load_dummy_data


class IMLSSearchView(View):
    @method_decorator(login_required)
    def post(self, request, *args, **kwargs):
        response = load_dummy_data("search_results.json")
        return JsonResponse(response)

    @method_decorator(login_required)
    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)
