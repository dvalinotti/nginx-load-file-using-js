FROM nginx:1.23.3-alpine

#config
COPY ./nginx.conf /etc/nginx/nginx.conf

#content, comment out the ones you dont need!
COPY ./*.html /usr/share/nginx/html/
COPY ./*.js /usr/share/nginx/html/
COPY ./*.txt /usr/share/nginx/html/