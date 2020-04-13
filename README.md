## Description

This test app created by React.js ![Generic badge](https://img.shields.io/badge/react.js-16.13.1-green) and RoR ![Generic badge](https://img.shields.io/badge/ror-5.2.4-green)

## Urls:
```bash
Frontend:
$ http://localhost:3000/
Backend:
$ http://localhost:3001/
```

## Backend::Running

```bash
Create a database, run seeds:
$ rails db:create db:migrate db:seed
To run the backend part:
$ rails s -b 0.0.0.0
```

## Fronted:Running

```bash
Open root folder of the project and go to frontend folder:
$ cd frontend/
Open src/constants/api.js and move 'localhost' to your ip (example: 'http://192.168.0.103:3000/api/v1' )
Install packages:
$ yarn install
To run the frontend part:
$ yarn start
```

Default credentials for login:
```bash
email: eugene@example.com
password: 11111111
```
