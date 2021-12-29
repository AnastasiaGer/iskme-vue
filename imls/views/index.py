from django.views.generic import TemplateView
from core.views import OERViewMixin


class IMLSIndexView(OERViewMixin, TemplateView):
    template_name = "imls/index.html"
