# Nativo Digital Test
## To configure this project you need to follow the following steps
+ install all dependencies in package.json file using this command
 ```zsh
$ npm i
 ```
+ configure your .env file based on the .env.example file
```
APP_HOST=localhost
APP_PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=admin123
DB_NAME=testdb
```
+ install your docker container "recomended", using the following command
```zsh
$ docker run -p 3306:3306 -d --name mysql8 -e MYSQL_ROOT_PASSWORD=admin123 mysql:8.0
```
+ create the database using the terminal or a client like mysql workbench, db beaver and so on. Command hint using docker.
```zsh
$ docker exec -it mysql8 mysql -u root -p
```
## Run the project
+ run in development mode
```zsh
npm run dev
```
+ run in production mode
```zsh
npm start
```
+ run in test mode
```zsh
npm test
```

### POST Patient example
+ Path
```
http://localhost:5000/v1/patient
```
#### payload
```json
{
    "completeName": "Eliud Vicente Yah Dzul",
    "age": 25,
    "gender": "Masculino",
    "birthDate": "1994-02-22",
    "hometown": "Nuevo Laredo Tamaulipas"
}
```
#### Response expected 201 created
```json
{ 
    "user":{
        "id": "959a76b2-1d2f-4761-9663-7a1f27dfe671",
        "completeName": "Eliud Vicente Yah Dzul",
        "age": 25,
        "gender": "Masculino",
        "birthDate": "1994-02-22T07:13:44.000Z",
        "hometown": "Nuevo Laredo Tamaulipas",
        "createdAt": "2021-06-11T01:21:30.000Z",
        "updatedAt": "2021-06-11T01:21:30.000Z"
    },
    "message":"patient created successfully"
}
```