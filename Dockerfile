FROM node:18.4.0

ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

WORKDIR /usr/src/todo

RUN npm install -g npm@8.13.2
RUN npm install -g typescript@3.6.3 ts-node
RUN npm install -g create-react-app@5.0.1
# RUN npx create-react-app todo-app --template typescript