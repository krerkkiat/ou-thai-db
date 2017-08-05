# 1
# Config the mappings for the index.
# Only the track type
curl -X PUT '127.0.0.1:9200/wyatt?pretty' -d \
'{
    "mappings": {
        "entry": {
            "properties": {
                "author_eng": {
                    "type": "text",
                    "fields": {
                        "english": { "type": "text", "analyzer": "english" }
                    }
                },
                "author_th": {
                    "type": "text",
                    "fields": {
                        "thai": { "type": "text", "analyzer": "thai" }
                    }
                },
                "call_number": {
                    "type": "text",
                    "index": "false"
                },
                "description": {
                    "type": "text",
                    "fields": {
                        "raw": { "type": "text", "index": "false" },
                        "thai": { "type": "text", "analyzer": "thai" },
                        "english": { "type": "text", "analyzer": "english" }
                    }
                },
                "imprint_eng": {
                    "type": "text",
                    "fields": {
                        "english": { "type": "text", "analyzer": "english" }
                    }
                },
                "imprint_th": {
                    "type": "text",
                    "fields": {
                        "thai": { "type": "text", "analyzer": "thai" }
                    }
                },
                "note_eng": {
                    "type": "text",
                    "fields": {
                        "english": { "type": "text", "analyzer": "english" }
                    }
                },
                "note_th": {
                    "type": "text",
                    "fields": {
                        "thai": { "type": "text", "analyzer": "thai" }
                    }
                },
                "subjects": {
                    "type": "text",
                    "fields": {
                        "raw": { "type": "text", "index": "false" },
                        "thai": { "type": "text", "analyzer": "thai" },
                        "english": { "type": "text", "analyzer": "english" }
                    }
                },
                "title_eng": {
                    "type": "text",
                    "fields": {
                        "english": { "type": "text", "analyzer": "english" }
                    }
                },
                "title_th": {
                    "type": "text",
                    "fields": {
                        "thai": { "type": "text", "analyzer": "thai" }
                    }
                },
                "url": {
                    "type": "text",
                    "index": "false"
                },
                "publication_year": {
                    "type": "integer"
                },
                "old_database_id": {
                    "type": "keyword"
                }
            }
        }

    }
}'
