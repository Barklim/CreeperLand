# CreeperLand 

[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Barklim/CreeperLand.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Barklim/CreeperLand/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/Barklim/CreeperLand.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Barklim/CreeperLand/alerts/)

## Table of Contents

- [Developer info](#developer-info)
- [Bootstraped](#bootstraped)
- [Meta](#meta)	

[CreepLand (Website)](https://creeper.land/) - for mc donats.

## Developer info

### Project setup

In server delete dist folder and del migrations if have. Create db with dbname and pass like in mikro-orm.config.ts

```
  dbName: "creeperland",
  password: "web13",
```

Create migration

```
yarn create:migration 
```

Lets compile ts (it create dist folder)

```
yarn watch 
```

Export redis env and run 
```
echo $REDISSECRET
export REDISSECRET=supersecret
redis-server
redis-cli
```

Run it (start the server with psql db connection)

```
yarn dev 
```

## Bootstraped

* [cra-template](https://github.com/react-boilerplate/react-boilerplate-cra-template)
* [Formik](Formik)
* react-animaiton
* typescript
* express
* typeorm
* pgsql
* unitpay.money

## Meta

Team:
- [Github](https://barklim.github.io/) - Frontend developer Github page
