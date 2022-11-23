# ------------------------------------------------------
# NGINX Configuration
# ------------------------------------------------------
FROM humana-dha-dhp-docker-artifacts.jfrog.io/nginx:1.18.0

COPY dist /usr/share/nginx/html

RUN rm -r /etc/nginx/conf.d/

COPY nginx/conf /etc/nginx/conf.d

EXPOSE 80
