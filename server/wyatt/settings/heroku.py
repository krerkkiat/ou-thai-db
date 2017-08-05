import dj_database_url

from .base import *

# Use the DATABASE_URL from the environment.
DATABASES['default'] = dj_database_url.config(conn_max_age=500)

# Force HTTPS. However, this does not work with development server.
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
