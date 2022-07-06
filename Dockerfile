FROM node:18.4.0

ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

WORKDIR /usr/src/todo

RUN npm install -g npm@8.13.2
RUN npm install --save-dev typescript@3.6.3
RUN npm install --save-dev create-react-app@5.0.1
# RUN npx create-react-app todo-app --template typescript