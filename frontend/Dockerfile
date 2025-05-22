FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html

# Redirect /api to backend
RUN sed -i '/location \/ {/a \
        proxy_pass http://backend:3000; \
        proxy_http_version 1.1; \
        proxy_set_header Upgrade $http_upgrade; \
        proxy_set_header Connection "upgrade"; \
        proxy_set_header Host $host;' \
    /etc/nginx/conf.d/default.conf
