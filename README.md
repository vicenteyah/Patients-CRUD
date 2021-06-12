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
    "age": 27,
    "gender": "Masculino",
    "birthDate": "1994-02-22",
    "hometown": "Nuevo Laredo Tamaulipas"
}
```
#### Response expected 201 created example
```json
{ 
    "uuid":"959a76b2-1d2f-4761-9663-7a1f27dfe671",
    "message":"patient created successfully"
}
```
# Post Hospital and tutor information example
+  You can use the test models to do this operation
```zsh
npm test
```
+ after running the above command, use postman or another app to send http requests
### path
```
http://localhost:5000/v1/hospital/info
```
### payload example
```json
{
    "patientUUID":"1168f50b-f12b-4af7-ab69-b54d34545192 ",
    "hospitalUUID": "40477fbf-c953-4746-a71c-8ba9c92667a4"
}

```
### Response Expected code 200 example
```json
{
    "uuid": "14158221-46ec-495b-8779-97726659bd5a",
    "message": "hospital information created successfully"
}
```
## The same steps for tutors model
### path
```
http://localhost:5000/v1/tutor/info
```
### payload example
```json
{
    "patientUUID":"1168f50b-f12b-4af7-ab69-b54d34545192 ",
    "tutorUUID": "40477fbf-c953-4746-a71c-8ba9c92667a4"
}

```
### Response Expected code 200 example
```json
{
    "uuid": "14158221-46ec-495b-8779-97726659bd5a",
    "message": "tutor information created successfully"
}
```
# CRUD options available like put , delete ang get
### you can use the same path corresponding to each operation
+ GET all Patients http://localhost:5000/v1/patients
+ GET one Patient http://localhost:5000/v1/patient/5f23589d-4206-4a57-b8c3-ed19bffd5f14
+ PUT update Patient data http://localhost:5000/v1/patient/5f23589d-4206-4a57-b8c3-ed19bffd5f14
#### payload for PUT option
```json
{
    "completeName": "Vicente Yah Dzul",
    "age": 27,
    "gender": "Masculino",
    "birthDate": "1994-02-22",
    "hometown": "Nuevo Laredo Tamaulipas"
}
```
+ DELETE delete one patient http://localhost:5000/v1/patient/5f23589d-4206-4a57-b8c3-ed19bffd5f14
