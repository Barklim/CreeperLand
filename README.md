# CreeperLand

[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Barklim/CreeperLand.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Barklim/CreeperLand/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/Barklim/CreeperLand.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Barklim/CreeperLand/alerts/)

## Table of Contents

- [Developer info](#developer-info)
- [Bootstraped](#bootstraped)
- [Meta](#meta)

[CreepLand (Website)](https://creeper.land/) - for mc donats.

## Developer info

### My Env

```
node: v14.5.0
psql: 13.0.0
redis: 6.0.9
```

### Project setup

In server delete dist folder and del migrations if have. Create db with dbname and pass like in mikro-orm.config.ts

```
  dbName: "creeperland",
  password: "web13",
  username: "postgres",
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

### i18n

i18n contains code in messages components like.

```
export const messages = {
  btnText: _t('translations.regModal.btnText', 'Registration'),
  btnOnLoad: _t('translations.regModal.btnOnLoad', 'Load…'),
};
```

Exported code.

```
yarn run extract-messages
```

Further in locales/ru the code from locales/en is manually duplicated.
It is not recommended to write fields with translation like this

```
someItem: () => _t(translations.regModal.btnText, 'Registration'),
```

Since as a result in locales/en an extra top sublevel translations is added to the json object because of which you have to make changes once again either in locales/en or in a line with a field.

```
"translations"
  "regModal": {
    "btnText": "Registration",
    "btnOnLoad": "Load…",
  }
```

## Bootstraped

- [cra-template](https://github.com/react-boilerplate/react-boilerplate-cra-template)
- [Formik](Formik)
- react-animaiton
- typescript
- express
- typeorm
- pgsql
- unitpay.money

## Meta

Team:

- [Github](https://barklim.github.io/) - Full-stack developer
