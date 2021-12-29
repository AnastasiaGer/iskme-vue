from django.conf.urls import url

from imls.views.index import IMLSIndexView
from imls.views.search import IMLSSearchView
from imls.views.browse import IMLSBrowseView

urlpatterns = [
    url(r"^/?$", IMLSIndexView.as_view(), name="IMLS"),
    url(r"^/search/?$", IMLSSearchView.as_view(), name="IMLS_Search"),
    url(r"^/browse/?$", IMLSBrowseView.as_view(), name="IMLS_Browse")
]
