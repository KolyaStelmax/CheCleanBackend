# CheClean ![](https://cdn1.savepice.ru/uploads/2020/4/29/12359aaeeca0908fe7afd91c61b4478c-full.png)

## The goal of this project is to make Cherkasy cleaner and better.

Our product divided into three main projects: Telegram Bot, Backend, and Frontend. Every project is needed to solve a specific problem. Backend manages database and endpoints that allow to:
* add new cases (from Bot);
* send all or specific cases (to Frontend);
* change the status of a case (on Frontend).

## Table of Contents
1. [Quick start](#qick-start)
    1. [Requirements](#requirements)
    2. [Run](#run)
2. [FAQ/help](#faq/help)
3. [Credits](#credits)

## Quick start

### Requirements
* [node v13](https://nodejs.org/dist/v13.12.0/)
* [docker desktop](https://www.docker.com/products/docker-desktop)
* [postgres v12](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

### Installiation
``` shell
> npm install
```

### Run
``` shell
> npm start
```

### Docker
You need [docker desktop](https://www.docker.com/products/docker-desktop) to start the project

At first time you need to run follow command
``` shell
> npm run docker:init
```

After first start for subsequent use run next command
``` shell
> npm run docker
```

To insert data into the base you need to run
``` shell
> npm run docker:seed
```

## FAQ/Help
If you got stuck or need some help, contact me
* Telegram: `@lexander_b1108`
* Gmail: `alexander.kretov99@gmail.com`

## Credits
Made by Master of Code studensts

1. https://github.com/Lexander1108 - Backend developer
2. https://github.com/jaxin007 - Bot developer
3. https://github.com/schikk - Frontend developer
4. https://github.com/KolyaStelmax - Devops 

Special thanks to Master of Code for the mentoring and helping. 2020(c)
