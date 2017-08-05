from elasticsearch import Elasticsearch
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

class SearchAPIView(APIView):
    # permission_classes = (IsAuthenticated, )

    def get(self, request):
        es = Elasticsearch()

        q = request.GET.get('q', '')
        start = request.GET.get('start', '')
        size = request.GET.get('size', '')

        body = '''
        {
            "from": ''' + start + ''',
            "size": ''' + size + ''',
            "query": {
                "query_string" : {
                    "query" : "''' + q + '''"
                }
            }
        }
        '''

        response = ''
        if q == '':
            response = es.search(index='wyatt', body='{ "from": ' + start + ', "size": ' + size + ', "query": {"match_all": {}} }')
        else:
            response = es.search(index='wyatt', body=body)

        return Response(response)
