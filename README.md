## Expense-Tracker


Sample expense record page

[Heroku Demo](https://singyo-expense-tracker.herokuapp.com/)

## **Features**

- view all expense records.
- check total amount in main page.
- add new record.
- edit data of record( amount, date, catagory, name).
- delete record.
- filter  record by one catagory, and get total amount from it.

## Prerequisites

Node.js

Express

Express-Handlebars

Mongodb + Robo 3T(optional)

Mongoose

Method-Override

## **Getting Started**

Clone repository to your local computer

```bash
$ git clone https://github.com/ChenSingYo/expense-tracker.git
```

Turn on mongodb

```bash
[~] $ cd ~/mongodb/bin/
[~/mongodb/bin] $ ./mongod --dbpath ~/mongodb-data
```

Install [npm](https://www.npmjs.com/) and execute

```bash
$ npm install
$ npm run seed      ..import catagory and record seeder
```

Execute

```bash
$ npm run start     ..automatically run 'node app.js'
```

or

```bash
$ npm -i nodemon
$ npm run dev       ..automatically run 'nodemon app.js'
```

when everything works fine:

```bash
Express is listening on localhost:3000
mongodb connected!
```

let 's check it with your Browser

```
http://localhost:3000
```

## **Built With**


Npm v7.0.15

Node.js 14.15.1

Nodemon 2.0.6

Express 4.17.1

Express Handlebars 5.2.0

Mongoose: 5.11.9

Method-Override: 3.0.0

## Contributor

[SingYo](https://github.com/ChenSingYo)
