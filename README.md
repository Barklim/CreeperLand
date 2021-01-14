# CreeperLand 

## Table of Contents

- [Developer info](#developer-info)
- [Bootstraped](#bootstraped)
- [Meta](#meta)	

[CreepLand (Website)](https://creeper.land/) - for mc donats.

## Developer info

### Project setup

In server delete dist folder and del migrations if have

create migration

```
yarn create:migration 
```

If you have problem with migration remove second addsql in migration file (i will add link on this issue if find)

its can look like

```
this.addSql('create table "post" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" text not null);');
this.addSql('create table "user" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "username" text not null, "password" text not null);');
```

Lets compile ts (it create dist folder)

```
yarn watch 
```

Run it (start the psql and redis before)

```
yarn dev 
```

## Bootstraped

* [cra-template](https://github.com/react-boilerplate/react-boilerplate-cra-template)
* [react-admin](https://www.youtube.com/watch?v=HRmdj-HpJyE&ab_channel=TraversyMedia)
* [react-hook-form](https://react-hook-form.com/)
* react-animaiton
* typescript
* express
* typeorm
* pgsql
* unitpay.money

## Meta

Team:
- [Github](https://barklim.github.io/) - Frontend developer Github page
