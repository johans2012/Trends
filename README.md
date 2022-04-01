# Spring Angular MySQL CRUD App
CRUD Operations for Angular + Java + MySQL.

### Development
Angular: 
1. `npm install`
2. `npm install angular-datatables --save`
3. `ng serve`

Database: create empty MySQL database "game':
1. `mysql -u root -p`
2. Enter password
3. `create database game;`<br/>
See properties: Student/src/main/resources/application.properties.<br/>
Hibernate will create tables automatically.<br/>

Server (in "Student directory"): `mvn spring-boot:run`

Insert values into tables (in mysql command line): `source {ProjectPath}\Database\game.sql`

Navigate to http://localhost:4200/play-game.
