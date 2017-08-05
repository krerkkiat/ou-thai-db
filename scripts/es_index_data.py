# -*- coding: utf-8 -*-
# This read the file containing the data on the online Wyatt DB
# and indexing it into the ES

import json
from elasticsearch import Elasticsearch

es = Elasticsearch()

with open('../data/wyatt_db_online.json', 'r') as f:
    data = json.load(f)

    for entry in data:
        # old_database_id is essential for the map of the year if we accuire it.
        entry['old_database_id'] = entry['bibid']
        del entry['bibid']

        # Tell ES to index with the newly created id.
        es.index(index='wyatt', doc_type='entry', body=entry)
