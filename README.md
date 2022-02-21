backend - 
inside laradock folder -> sudo docker-compose up nginx mysql

sudo docker exec -it <laradock_mysql container id> bash

mysql -u root -p
password: root

create database laradock_db;

sudo docker exec -it <laradock_php-fpm container id> bash

php artisan migrate
php db:seed

frontend - 
1 - sudo docker  build -t app:dev
2 - npm install
3 - npm run start
